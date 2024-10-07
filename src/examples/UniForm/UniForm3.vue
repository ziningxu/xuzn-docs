<template>
  <!-- exp ignore start -->
  <h1 data-id>展开/收起</h1>
  <p>
    <ElText> 配置中有 </ElText>
    <ElText type="warning"> hidden?: boolean </ElText>
    <ElText> 配置后，如果有 </ElText>
    <ElText type="warning"> key: 'btns' </ElText>
    <ElText> 的配置，会出现 展开/收起 的按键，也可以通过实例方法 </ElText>
    <ElText type="warning"> switchHidden: (val?: boolean) => void </ElText>
    <ElText> 进行切换 </ElText>
  </p>
  <!-- exp ignore end -->
  <ElButton type="primary" @click="uniTableRef?.switchHidden()">切换</ElButton>
  <ElButton type="primary" @click="uniTableRef?.switchHidden(true)">显示</ElButton>
  <ElButton type="primary" @click="uniTableRef?.switchHidden(false)">隐藏</ElButton>
  <ElDivider />
  <UniForm :model="formModel" :items="items" ref="uniTableRef" labelWidth="120" itemMinWidth="1fr" />
</template>
<script setup lang="ts">
import { ElButton, ElDivider } from 'element-plus'
import { UniForm, UniFormItemPropsType, UniSelect } from 'xuzn-ui'
import { h, reactive, ref } from 'vue'
const uniTableRef = ref()
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
