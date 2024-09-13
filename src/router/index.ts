import { createRouter, createWebHashHistory, RouteLocationNormalizedGeneric } from 'vue-router'
import { routes } from './routes'
import { useUserStore, useAppStore, AppPreData } from '@/store'
import { tokenStorageL } from '@/storage'
import { Base64 } from 'js-base64'
import pages from './u_pages'
import { routerHistory } from '@/utils/routerHistory'
import { addTags } from 'xuzn-ui'
import { APP_AUTH } from '@/appConst'
import { ElLoading } from 'element-plus'
const ignoreValidRouteNames = ['login']
// 创建路由
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: routes,
})
let loadingInstance: ReturnType<typeof ElLoading.service>
router.beforeEach(async (to) => {
  loadingInstance?.close()
  loadingInstance = ElLoading.service()
  if (to.name && ignoreValidRouteNames.includes(to.name.toString())) {
    // 不用验证登录
    return true
  }
  // 不记录忽略路由
  routerHistory(to)
  // 鉴权才需要token，否则随便给
  const token = APP_AUTH ? tokenStorageL() : '-'
  if (token) {
    const userStore = useUserStore()
    const appStore = useAppStore()
    // 说明有token的缓存
    if (!userStore.token) {
      // 状态数据中没有
      userStore.token = token
      // 远程请求路由菜单数据等
      await appStore.appInfo(getAppData())
      // 添加新路由
      addRoutes(appStore.menuItems)
      return to.fullPath
    }
  } else {
    // 从未登陆，需要去登录
    return '/login'
  }
})
router.afterEach((to) => {
  loadingInstance?.close()
  forceRouteComponentName(to)
  document.title = (to.meta?.title || 'Admin') + ''
  const meta = to.meta || {}
  if (meta.showTag !== false) {
    // 需要记录tags
    addTags(to)
  }
})

function forceRouteComponentName(to: RouteLocationNormalizedGeneric) {
  // 强制覆盖路由组件的 name，用于 KeepAlive 组件缓存
  const com: any = to.matched[to.matched.length - 1].components?.default
  if (com && typeof com === 'object' && com.__file && !com.__uniname) {
    com.__uniname = to.name
    com.__name = to.name
    com.name = to.name
  }
}

// 获取系统前置数据
export function getAppData() {
  // 模拟线上数据赋值
  const val: AppPreData = {
    userInfo: {
      userName: '游客',
      userId: '游客',
    },
    menuList: [],
    dictList: [],
  }
  return APP_AUTH ? undefined : val
}
export function toLogin() {
  if (!APP_AUTH) {
    // 不需要鉴权，也就不需要登录
    return
  }
  const appStore = useAppStore()
  appStore.showLogin = true
}
export function logout() {
  // 清空本地存储的token即可
  tokenStorageL('')
  // 刷新界面，交给路由处理
  location.reload()
}
export function addRoutes(routes: any[]) {
  // 格式化路由数据
  const page404 = () => import('@/views/404.vue')
  routes.forEach((item) => {
    if (item.component) {
      const key = Base64.encode(item.component)
      item.component = pages[key] || page404
      router.addRoute(item)
    }
  })
}
export default router
