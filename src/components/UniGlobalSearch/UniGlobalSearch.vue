<template>
  <div class="uni-global-search">
    <ElInput size="large" v-model="state.kw" :prefix-icon="Search" clearable placeholder="请输入关键字" />
    <div style="height: 15px"></div>
    <template v-if="state.kw">
      <div class="uni-gs-result" v-if="searchItems.length">
        <el-scrollbar max-height="400px">
          <div class="uni-gs-li" v-for="item in searchItems" :key="item.value" @click="onItemClick(item)">
            <ElIcon class="uni-gs-icon" size="20">
              <component :is="item.icon || Menu" />
            </ElIcon>
            <span class="uni-gs-text">{{ item.label }}</span>
          </div>
        </el-scrollbar>
      </div>
      <div class="uni-gs-empty" v-else>未能搜索到结果</div>
    </template>
    <div class="uni-gs-empty" v-else>请输入关键字搜索</div>
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store'
import { Search, Menu } from '@element-plus/icons-vue'
import { ElIcon, ElInput } from 'element-plus'
import { debounce } from 'lodash-es'
import { watch } from 'vue'
import { reactive, shallowRef } from 'vue'
import { useRouter } from 'vue-router'
const appStore = useAppStore()
const state = reactive({ kw: '' })
const searchItems = shallowRef<any[]>([])
const router = useRouter()
const onSearch = debounce(() => {
  searchItems.value = getMenuItemLevel(state.kw, appStore.menuList)
}, 300)
watch(
  () => state.kw,
  () => {
    onSearch()
  },
)
function onItemClick(item: any) {
  router.push(item.path)
  appStore.showSearch = false
}
// 获取菜单数据层级
function getMenuItemLevel(kw: string, menuList: any[]) {
  let items: any[][] = []
  kw = ((typeof kw === 'string' ? kw : '') + '').trim()
  if (!(kw && menuList && menuList.length)) {
    return []
  }
  function fn(arr: any[], levelList: any[] = []) {
    return arr.some((o) => {
      if (o) {
        if (Array.isArray(o.children) && o.children.length) {
          return fn(o.children, [...levelList, o])
        }
        // 只找叶子节点，没有子节点的数据
        const str = '' + o.name + (o.meta?.title || '') + (o.path || '')
        if (str.includes(kw) || kw.includes(str)) {
          items.push([...levelList, o])
          // return true
        }
      }
    })
  }
  fn(menuList)
  return items.map((ar) => {
    const target = ar[ar.length - 1]
    return {
      value: target.name,
      label: ar.map((o) => o.meta?.title || o._sourceName || o.id).join(' - '),
      icon: target.meta?.icon,
      path: target.path,
    }
  })
}
</script>
<style lang="scss" scoped>
.uni-global-search {
  .uni-gs-empty {
    text-align: center;
    margin: 40px 0;
    color: var(--el-text-color-regular);
  }
  .uni-gs-li {
    padding: 15px;
    background: var(--el-bg-color-overlay);
    border: 1px solid var(--el-border-color-light);
    list-style: none;
    border-radius: 4px;
    margin-bottom: 5px;
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 15px;
    &:hover {
      background: var(--el-color-primary);
      color: var(--el-text-color-primary);
      border-color: var(--el-color-primary);
    }
  }
}
</style>
