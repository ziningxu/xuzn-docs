<script setup lang="ts">
import initAppData from './initAppData'
import { ArrowDown, Search, FullScreen, Sunny, Moon } from '@element-plus/icons-vue'
import { LayoutIndex, LayoutMenuItemType, LayoutTagsClickType, toggleFullScreen, uniGlobalState } from 'xuzn-ui'
import { useUserStore, useAppStore } from '@/store'
import { computed } from 'vue'
import { MenuItemRegistered } from 'element-plus'
import { RouteRecordRaw, useRouter } from 'vue-router'
import { routes } from './router/routes'
import { logout } from '@/router'
import { APP_COLORS } from './appConst'
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

// 界面元素点击
function onBtnsClick(type: string) {
  if (type === 'logout') {
    logout()
  } else if (type === 'switchUser') {
    appStore.showLogin = true
  } else if (type === 'search') {
    appStore.showSearch = true
  } else if (type === 'fullscreen') {
    toggleFullScreen()
  }
}
</script>

<template>
  <LayoutIndex :menus="menus" :menuActive="routeName" :tagActive="routeName" @tagItemClick="onTagItemClick" @menuItemClick="onMenuItemClick">
    <template #header_logo>
      <img style="height: 36px" src="@/assets/logo.svg" />
      <span style="font-size: 20px">Admin</span>
    </template>
    <template #header_right>
      <div class="header-btn">
        <el-color-picker :predefine="APP_COLORS" v-model="uniGlobalState.primary" />
      </div>
      <div class="header-btn">
        <el-switch
          v-model="uniGlobalState.dark"
          style="--el-switch-on-color: var(--el-bg-color); --el-switch-off-color: var(--el-color-primary)"
          inline-prompt
          :active-icon="Moon"
          :inactive-icon="Sunny"
        ></el-switch>
      </div>
      <div class="header-btn" @click="onBtnsClick('search')">
        <el-icon><Search /></el-icon>
      </div>
      <div class="header-btn" @click="onBtnsClick('fullscreen')">
        <el-icon><FullScreen /></el-icon>
      </div>
      <el-dropdown class="header-user-dropdown" @command="onBtnsClick">
        <div class="header-btn">
          <div class="header-user-img">
            {{ userStore.userName.slice(0, 1) }}
          </div>
          <div>{{ userStore.userName }}</div>
          <el-icon>
            <arrow-down />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="switchUser">切换账号</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </template>
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
