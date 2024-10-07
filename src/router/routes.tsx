import { RouteRecordRaw } from 'vue-router'
/*
meta.isMenu  如果是false，就不限制在菜单上
meta.menuSort 排序 > 0
meta.fullpage 独立排版 false
meta.showTag 是否显示在标签页中
*/
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index',
    meta: { isMenu: false, showTag: false },
  },
  {
    path: '/index',
    name: 'index',
    meta: { title: 'index' },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/layout',
    name: 'layout',
    meta: { title: '模板项目结构' },
    component: () => import('@/views/layout/index.vue'),
  },
  {
    path: '/xuzn-ui',
    name: '/xuzn-ui',
    meta: { title: '组件库(xuzn-ui)' },
    children: [
      {
        path: '/UniTable',
        name: 'UniTable',
        meta: { title: 'UniTable' },
        component: () => import('@/views/UniTable/index.vue'),
      },
      {
        path: '/form',
        name: 'form',
        meta: { title: 'Form 表单' },
        children: [
          {
            path: '/UniForm',
            name: 'UniForm',
            meta: { title: 'UniForm' },
            component: () => import('@/views/UniForm/index.vue'),
          },
          {
            path: '/UniSelect',
            name: 'UniSelect',
            meta: { title: 'UniSelect' },
            component: () => import('@/views/UniSelect/index.vue'),
          },
          {
            path: '/UniCheckboxGroup',
            name: 'UniCheckboxGroup',
            meta: { title: 'UniCheckboxGroup' },
            component: () => import('@/views/UniCheckboxGroup/index.vue'),
          },
          {
            path: '/UniRadioGroup',
            name: 'UniRadioGroup',
            meta: { title: 'UniRadioGroup' },
            component: () => import('@/views/UniRadioGroup/index.vue'),
          },
        ],
      },
      {
        path: '/hooks',
        name: 'hooks',
        meta: { title: 'hooks' },
        children: [
          {
            path: '/useTable',
            name: 'useTable',
            meta: { title: 'useTable' },
            component: () => import('@/views/useTable/index.vue'),
          },
        ],
      },
      {
        path: '/storage',
        name: 'storage',
        meta: { title: 'storage' },
        component: () => import('@/views/storage/index.vue'),
      },
      {
        path: '/functionLib',
        name: 'functionLib',
        meta: { title: '函数库' },
        component: () => import('@/views/functionLib/index.vue'),
      },
    ],
  },
  {
    path: '/layoutExp',
    name: 'layoutExp',
    meta: { title: '排版示例' },
    children: [
      {
        path: '/table',
        name: 'table',
        meta: { title: '增删改查', cache: false },
        component: () => import('@/views/layoutExp/table1/index.vue'),
      },
    ],
  },
  {
    path: '/htmlTransform',
    name: 'htmlTransform',
    meta: { title: 'html字符转义', cache: false },
    component: () => import('@/views/htmlTransform/index.vue'),
  },
  {
    path: '/repl',
    name: 'repl',
    meta: { title: '试试看', isMenu: false, fullpage: true, showTag: false },
    component: () => import('@/views/repl/index.vue'),
  },
  {
    name: 'login',
    path: '/login',
    meta: { title: 'login', fullpage: true, isMenu: false, showTag: false },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: { title: '404', isMenu: false, showTag: false },
    component: () => import('@/views/404.vue'),
  },
]
