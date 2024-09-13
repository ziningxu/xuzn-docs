import { RouteLocationNormalized } from 'vue-router'

export const routerHistory = (() => {
  const historyRoutes: RouteLocationNormalized[] = []
  const max = 3
  return (to?: RouteLocationNormalized) => {
    if (to) {
      // 最新的在最前面
      historyRoutes.unshift(to)
    }
    if (historyRoutes.length > max) {
      // 限制数量
      historyRoutes.length = max
    }
    return historyRoutes
  }
})()
