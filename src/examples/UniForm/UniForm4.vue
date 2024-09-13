<template>
  <!-- exp ignore start -->
  <h1 data-id>插槽使用</h1>
  <h3>这里展示多种插槽方式，随便选一个你喜欢的使用就行</h3>
  <p>
    <ElText> 配置中有 </ElText>
    <ElText type="warning"> component?: (...args: any[]) => VNodeChild </ElText>
    <ElText> 可以通过 </ElText>
    <ElText type="warning"> h </ElText>
    <ElText> 函数进行渲染自定义元素 </ElText>
  </p>
  <p>
    <ElText type="warning"> component </ElText>
    <ElText> 返回值如果是数组，可以给数组中元素指定属性 </ElText>
    <ElText type="warning"> data-prop </ElText>
    <ElText> 用于对应 </ElText>
    <ElText type="warning"> model </ElText>
    <ElText> 响应式数据中的值，使用 </ElText>
    <ElText type="warning"> data- </ElText>
    <ElText> 开头是为了 </ElText>
    <ElText type="warning"> typescript </ElText>
    <ElText> 不会报错 </ElText>
  </p>
  <p>
    <ElText> 配置中的 </ElText>
    <ElText type="warning"> key: string </ElText>
    <ElText> 属性值可以对应插槽 </ElText>
    <ElText type="warning"> default </ElText>
  </p>
  <p>
    <ElText> 其他插槽，下划线分隔 </ElText>
    <ElText type="warning"> {key}_{slotName} </ElText>
    <ElText> 如： </ElText>
    <ElText type="warning"> id_label </ElText>
    <ElText> 就是这里的label插槽 </ElText>
  </p>
  <!-- exp ignore end -->
  <UniForm :model="formModel" label-width="200px" itemMinWidth="1fr" :items="items">
    <template #id_label>
      <i>通过 key 插槽的 label</i>
    </template>
    <template #id>
      <ElInput />
    </template>
  </UniForm>
  <pre><code>{{ JSON.stringify(formModel, null, 2) }}</code></pre>
</template>
<script setup lang="ts">
import { ElAlert, ElInput } from 'element-plus'
import { UniForm, UniFormItemPropsType, UniSelect } from 'xuzn-ui'
import { h, reactive } from 'vue'
const formModel = reactive({ id: '' })
const options = [
  { value: '1', label: '关羽' },
  { value: '2', label: '张飞' },
]
const items: UniFormItemPropsType[] = [
  { key: 'id', label: 'ID' },
  {
    key: 'title',
    label: 'TITLE',
    // 优先级高于 component
    slots: {
      label() {
        return 'label'
      },
      default() {
        return h(ElInput, { placeholder: '哇咔咔' })
      },
    },
    // 和slots.default同时存在时
    // 优先级较低，所以不会走这里
    component() {
      return h(UniSelect, { options })
    },
  },
  {
    key: 'name',
    label: '名称',
    component() {
      return [
        // 需要独立指定 prop
        h(UniSelect, { options, 'data-prop': 'name' }),
        h(ElAlert, null, {
          default() {
            return '多个元素的处理方式'
          },
        }),
        h(ElInput, { 'data-prop': 'name1' }),
      ]
    },
  },
  { key: 'btns' },
]
</script>
