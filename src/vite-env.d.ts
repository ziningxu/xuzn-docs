/// <reference types="vite/client" />
/// <reference types="vue-router" />
import * as ElementPlusGlobal from '@vue/runtime-core'

// 引入element-plus
declare module 'vue' {
  module '*?txt' {
    const s: string
    export default s
  }
  module '*u_pages' {
    const s: Record<string, any>
    export default s
  }
  interface ComponentCustomProperties extends ElementPlusGlobal.GlobalComponents {}
}
/*
meta.isMenu  如果是false，就不限制在菜单上
meta.menuSort 排序 > 0
meta.fullpage 独立排版 false
*/
declare module 'vue-router' {
  interface RouteMeta {
    isMenu?: boolean // 是否是菜单 默认true
    menuSort?: number // 菜单排序
    fullpage?: boolean // 是否业内全屏
    showTag?: boolean // 是否在标签页显示
    cache?: boolean // 是否需要缓存， 默认 true
  }
}
