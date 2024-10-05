<script setup lang="ts">
import initAppData from './initAppData'
import { Search, FullScreen } from '@element-plus/icons-vue'
import { LayoutIndex, LayoutIndexHeaderItemType, LayoutMenuItemType, LayoutTagsClickType, toggleFullScreen } from 'xuzn-ui'
import { useUserStore, useAppStore } from '@/store'
import { computed } from 'vue'
import { MenuItemRegistered } from 'element-plus'
import { RouteRecordRaw, useRouter } from 'vue-router'
import { routes } from './router/routes'
import { logout } from '@/router'
import logoSrc from '@/assets/logo.svg'
// 初始化项目数据
initAppData()
const userStore = useUserStore()
const appStore = useAppStore()
const router = useRouter()
const menus = computed(() => {
  // 本地路由加线上路由
  return formatMenuList([...routes, ...appStore.menuList])
})
const routeName = computed(() => {
  const name = router.currentRoute.value.name
  return typeof name === 'string' ? name : ''
})

// 格式化菜单数据
function formatMenuList(arr: RouteRecordRaw[]): LayoutMenuItemType[] {
  return arr
    .filter((o) => {
      const meta = o?.meta || {}
      return o && meta.isMenu !== false
    })
    .sort((a: any, b: any) => {
      // 后台数据对不上，只能初次下册
      return (a?.meta?.menuSort || a?.menuSort || 0) - (b?.meta?.menuSort || b?.menuSort || 0)
    })
    .map((o) => {
      const meta = o.meta || {}
      return {
        name: typeof o.name === 'string' ? o.name : '', // 唯一值，必须的
        title: typeof meta.title === 'string' ? meta.title : '',
        icon: meta.icon as any,
        subset: formatMenuList(o.children || []),
      }
    })
}

// 菜单元素点击
function onMenuItemClick({ sourceItem }: { sourceItem: LayoutMenuItemType; instanceItem: MenuItemRegistered }) {
  router.push({ name: sourceItem.name })
}

// 标签页元素点击
function onTagItemClick({ toItem }: LayoutTagsClickType) {
  if (toItem) {
    // 需要进入新的路由
    router.push(toItem)
  }
}

function onLogoClick() {
  router.push('/')
}
// 界面元素点击
function onBtnsClick(type: string) {
  if (type === 'logout') {
    logout()
  } else if (type === 'usercenter') {
    router.push('/usercenter')
  } else if (type === 'apiCache') {
    sessionStorage.clear()
    location.reload()
  } else if (type === 'switchUser') {
    appStore.showLogin = true
  } else if (type === 'search') {
    appStore.showSearch = true
  } else if (type === 'fullscreen') {
    toggleFullScreen()
  }
}
const headerBtns: LayoutIndexHeaderItemType[] = [
  {
    key: '搜索',
    icon: Search,
    onClick: () => onBtnsClick('search'),
  },
  {
    key: '全屏',
    icon: FullScreen,
    onClick: () => onBtnsClick('fullscreen'),
  },
  {
    key: userStore.userName,
    dropdown: {
      onCommand: onBtnsClick,
      options: [
        // { command: 'usercenter', title: '账号信息' },
        { command: 'apiCache', title: '刷新缓存' },

        // { command: 'switchUser', divided: true, title: '切换账号' },
        { command: 'logout', title: '退出登录' },
      ],
    },
  },
]
</script>

<template>
  <LayoutIndex
    :menus="menus"
    :menuActive="routeName"
    :tagActive="routeName"
    @tagItemClick="onTagItemClick"
    @menuItemClick="onMenuItemClick"
    @logoClick="onLogoClick"
    :logoSrc="logoSrc"
    logoTitle="系统管理平台"
    :headerBtns="headerBtns"
  >
    <slot></slot>
  </LayoutIndex>
</template>

<style scoped lang="scss">
.header-btn {
  outline: none;
  padding: 0 10px;
  background: none;
  height: 100%;
  background: none;
  color: #fff;
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: var(--el-color-primary);
  }
}
.header-user-dropdown.el-dropdown {
  height: 100%;
  .header-user-img {
    width: 35px;
    height: 35px;
    border-radius: 35px;
    background: #ccc !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
