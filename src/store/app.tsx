import { defineStore } from 'pinia'
import { authInfo } from '@/globalApi'
import { useUserStore } from './user'
import { markRaw } from 'vue'
import { RouteRecordRaw } from 'vue-router'
// 系统前置数据
export interface AppPreData {
  userInfo: Record<string, any>
  menuList: RouteRecordRaw[]
  dictList: DictItemType[]
}
export interface DictItemChildrenItemType {
  label: string
  value: string
}
export interface DictItemType {
  children: DictItemChildrenItemType[]
  typeCode: 'dict_type'
  typeName: '字典类型'
}
export interface AppState {
  showAppSetting: boolean // 打开全局配置界面
  showLogin: boolean // 展示登录界面
  showSearch: boolean // 展示搜索界面
  userInfo: Record<string, any> // 用户数据的原始数据
  menuList: RouteRecordRaw[] // 菜单列表，只包含请求的数据，不包含本地数据
  menuItems: RouteRecordRaw[] // 打平后的菜单数据，只包含请求的数据，不包含本地数据
  dictList: DictItemType[] // 字段列表
  showTopProgress: boolean // 显示顶部进度条
}

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    return {
      showAppSetting: false, // 全局配置
      showSearch: false, // 全局搜索
      showLogin: false, // 显示登录弹窗
      userInfo: {},
      menuList: [],
      dictList: [],
      menuItems: [],
      showTopProgress: false,
    }
  },
  getters: {
    // 获取字典项目组
    getDictItems(state) {
      return (key: string): DictItemType['children'] => {
        // 获取字典数据，key为对应类型代码
        const list = state.dictList || []
        const item = list.find((o) => o.typeCode === key)
        return item?.children || []
      }
    },
    // 获取指定字典value的项目
    getDictItem() {
      return (key: string, value: any) => {
        const items = this.getDictItems(key)
        return items.find((o) => o?.value === value)
      }
    },
    // 获取指定字典value对应的label
    getDictItemLabel() {
      return (key: string, value: any) => {
        return this.getDictItem(key, value)?.label
      }
    },
  },
  actions: {
    // 项目初始信息
    async appInfo(res?: AppPreData) {
      const appStore = this
      try {
        res = res || (await getAppData())
        const { userInfo, menuList, dictList } = res
        appStore.userInfo = markRaw(userInfo)
        appStore.menuList = markRaw(formatMenuList(menuList))
        appStore.menuItems = markRaw(menuListFlat(JSON.parse(JSON.stringify(appStore.menuList))))
        appStore.dictList = markRaw(dictList)

        // 记录用户数据
        const userStore = useUserStore()
        userStore.initUserInfo(userInfo)
      } catch (error) {
        console.error(error)
      }
    },
  },
})
// 获取系统前置数据
async function getAppData() {
  return Promise.all([authInfo()]).then((res) => {
    // 登录后，前置数据获取
    // console.warn('------> 待完善')
    const userInfo = markRaw({})
    const menuList = markRaw([])
    const dictList = markRaw([])
    const val: AppPreData = { userInfo, menuList, dictList }
    return val
  })
}
// 格式化菜单数据
function formatMenuList(menuList: RouteRecordRaw[]) {
  function fn(arr: any[]) {
    return arr.map((o) => {
      // 唯一值判断
      o._sourceName = o.name
      o.name = `${o.id}_${o.name}`
      if (Array.isArray(o.children)) {
        o.children = formatMenuList(o.children)
      }
      return o
    })
  }
  return fn(menuList)
}

// 菜单数据打平
function menuListFlat(menuList: any[]) {
  const items: any[] = []
  function fn(arr: any[]) {
    arr.forEach((o) => {
      if (o) {
        // name是唯一值
        items.push({ ...o, children: undefined })
        if (Array.isArray(o.children)) {
          fn(o.children)
        }
      }
    })
  }
  fn(menuList)
  return items
}
