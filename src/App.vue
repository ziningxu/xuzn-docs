<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import LayoutApp from './LayoutApp.vue'
import { useAppStore } from './store'
import { getUrlQuery, UniTopProgress, UniGlobalSetting, uniGlobalState, getAniClass } from 'xuzn-ui'
import LoginForm from '@/views/login/LoginForm.vue'
import { useRoute, useRouter } from 'vue-router'
import UniGlobalSearch from './components/UniGlobalSearch'
import { Setting } from '@element-plus/icons-vue'
import { useDraggable } from 'element-plus'
import { APP_COLORS } from './appConst'
const appStore = useAppStore()
const route = useRoute()
const router = useRouter()
const fullpage = computed(() => {
  const query = getUrlQuery(route.fullPath)
  return query.fullpage === 'true' || !!(route.meta && route.meta.fullpage)
})
const appSettingRef = shallowRef()
const appSettingDragRef = shallowRef()
const isDraggable = computed(() => true)
useDraggable(appSettingRef, appSettingDragRef, isDraggable)
const routeCacheKeys = computed(() => {
  const routes = router.getRoutes()
  const ks = uniGlobalState.routeTags.map((o) => o.name).filter((n) => routes.some((o) => n === o.name && o.meta?.cache !== false))
  return ks
})
// 路由过度动效
const ani = (() => {
  let _key: any
  let _ani = getAniClass('uni-route-ani')
  return (key: any) => {
    // 根据配置变化
    const ar = (uniGlobalState.ani || '').split(',').map((s) => s.trim())
    if (ar.length === 2) {
      return getAniClass('uni-route-ani', ar)
    }
    if (_key !== key) {
      _ani = getAniClass('uni-route-ani')
    }
    return _ani
  }
})()
</script>

<template>
  <!-- matched的判断，防止刷新闪屏问题 -->
  <router-view v-if="!($route.matched && $route.matched.length) || fullpage"></router-view>
  <LayoutApp v-else>
    <router-view v-slot="{ Component, route }">
      <transition
        appear
        :appear-active-class="ani(route.name).appearClass"
        :enter-active-class="ani(route.name).enterClass"
        :leave-active-class="ani(route.name).leaveClass"
      >
        <KeepAlive :include="routeCacheKeys">
          <component :is="Component" />
        </KeepAlive>
      </transition>
    </router-view>
  </LayoutApp>
  <div class="uni-app-setting" ref="appSettingRef">
    <div class="uni-app-setting-drag" ref="appSettingDragRef"></div>
    <ElButton type="primary" :icon="Setting" @click="appStore.showAppSetting = true" />
  </div>
  <el-dialog v-model="appStore.showLogin" width="400" destroy-on-close>
    <LoginForm />
  </el-dialog>
  <el-dialog v-model="appStore.showSearch" width="700" destroy-on-close title="搜索">
    <UniGlobalSearch />
  </el-dialog>
  <el-drawer v-model="appStore.showAppSetting" title="全局配置" destroy-on-close size="360">
    <UniGlobalSetting :defaultPrimaryColors="APP_COLORS" />
  </el-drawer>
  <UniTopProgress :show="appStore.showTopProgress" />
</template>

<style lang="scss" scoped>
.uni-app-setting {
  position: fixed;
  right: 0;
  top: 50%;
  z-index: 99;
  padding: 10px;
  user-select: none;
  .uni-app-setting-drag {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: move;
  }
  .el-button {
    position: relative;
    border: 0;
    padding: 12px;
    z-index: 1;
  }
}
</style>
<style lang="scss">
.uni-layout-index .uni-layout-index-main {
  position: relative;
}
.uni-route-ani {
  --route-ani-inset: 0;
  position: absolute;
  left: var(--route-ani-inset);
  top: var(--route-ani-inset);
  right: var(--route-ani-inset);
  bottom: var(--route-ani-inset);
  overflow: hidden !important;
}
</style>
