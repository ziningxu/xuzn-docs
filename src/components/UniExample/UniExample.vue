<template>
  <div class="uni-exp">
    <div class="uni-exp-body" ref="expScrollRef">
      <slot name="pre"></slot>
      <template v-if="items.length">
        <UniTempCard v-for="item in items" :key="item.key" :txt="item.txt">
          <div style="float: right" v-if="isLocalServer()">
            <ElText>{{ item.key }}</ElText>
          </div>
          <component :is="item.component" />
        </UniTempCard>
      </template>
      <slot></slot>
    </div>
    <div class="uni-exp-menu" v-if="menus.length">
      <UniAnchor :items="menus" :container="expScrollRef" />
    </div>
  </div>
</template>
<script setup lang="ts">
import UniTempCard from '@/components/UniTempCard'
import UniAnchor, { UniAnchorItemType } from '@/components/UniAnchor'
import { computed, ref } from 'vue'
import pages from '@/examples/u_pages'
import { ElText } from 'element-plus'
import { isLocalServer } from '@/appConst'
interface PropsType {
  expKeys?: string[]
}
const props = defineProps<PropsType>()
const expScrollRef = ref()
const items = computed(() => {
  const ks: string[] = (Array.isArray(props.expKeys) ? props.expKeys : [])
    .map((k) => {
      if (k.endsWith('/')) {
        // 表示文件夹
        return Object.keys(pages).filter((pk) => !pk.endsWith('_txt') && pk.startsWith(k))
      }
      return k
    })
    .flat()
  return ks.map((k) => {
    return {
      key: k,
      component: pages[k],
      txt: pages[k + '_txt'],
    }
  })
})

const menus = computed<UniAnchorItemType[]>(getAnchorEle)
function getAnchorEle() {
  const box = expScrollRef.value
  const els = (box instanceof HTMLElement ? [...box.querySelectorAll('[data-id]')] : []) as HTMLElement[]
  return els.reduce((t, el) => {
    const title = el.getAttribute('data-id') || el.innerText
    const level = +(el.getAttribute('data-level') || 0)
    const id = title.replace(/\s/g, '')
    const key = '#' + id
    el.id = id
    const items = fn(t, level)
    if (key && !items.some((o) => o.key === key)) {
      items.push({
        key: key,
        title,
        level,
        children: [],
      })
    }
    return t
  }, [] as UniAnchorItemType[])
  function fn(items: UniAnchorItemType[], level = 0) {
    if (level === 0) {
      return items
    }
    const item = items[items.length - 1]
    if (item) {
      if (item.level === level) {
        return items
      }
      item.children = item.children || []
      if (item.children) {
        return fn(item.children, level)
      }
    }
    return items
  }
}
</script>
<style lang="scss">
.uni-exp {
  display: flex;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  .uni-exp-body {
    flex: 1;
    box-sizing: border-box;
    padding: 15px;
    height: 100%;
    overflow: auto;
  }
  .uni-exp-menu {
    width: 200px;
    height: 100%;
    overflow: auto;
  }
  h1 {
    margin-top: 0;
  }
}
</style>
