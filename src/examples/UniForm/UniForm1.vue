<template>
  <!-- exp ignore start -->
  <h1 data-id>基础使用</h1>
  <p>
    <ElText type="warning"> items </ElText>
    <ElText> 配置中的 </ElText>
    <ElText type="warning"> key </ElText>
    <ElText> 自动绑定 </ElText>
    <ElText type="warning"> model </ElText>
    <ElText> 响应式变量中的key </ElText>
  </p>
  <p>
    <ElText> 默认会是 </ElText>
    <ElText type="warning"> inline </ElText>
    <ElText> 布局 </ElText>
  </p>
  <p>
    <ElText> 默认 </ElText>
    <ElText type="warning"> key: 'btns' </ElText>
    <ElText> 展示按键，配置中有 </ElText>
    <ElText type="warning"> hidden?: boolean </ElText>
    <ElText> 会出现展开收起的按键 </ElText>
  </p>
  <!-- exp ignore end -->
  <UniForm :model="formModel" :items="items" label-width="auto" />
  <pre><code>{{ JSON.stringify(formModel, null, 2) }}</code></pre>
</template>
<script setup lang="ts">
import { UniForm, UniFormItemPropsType, UniSelect } from 'xuzn-ui'
import { h, reactive } from 'vue'
const formModel = reactive({})
const options = [
  { value: '1', label: '关羽' },
  { value: '2', label: '张飞' },
]
const items: UniFormItemPropsType[] = [
  { key: 'id', label: 'ID' },
  {
    key: 'title',
    label: 'TITLE',
    component() {
      return h(UniSelect, { options })
    },
  },
  { key: 'hidden', label: '默认隐藏', hidden: true },
  { key: 'btns' },
]
</script>
