<template>
  <UniTable :tableApi="tableApi" :columns="columns" row-key="id" :title="$route.meta?.title">
    <template #filter_form>
      <UniForm
        layout-type="lr"
        :model="formModel"
        labelWidth="auto"
        :items="items"
        @submit="tableApi.onCurrentChange(1)"
        @reset="tableApi.onCurrentChange(1)"
      ></UniForm>
    </template>
    <template #ops="scope">
      <slot v-bind="scope"></slot>
    </template>
    <template #bar_right>
      <slot name="bar_right"></slot>
    </template>
  </UniTable>
</template>
<script setup lang="tsx">
import { UseTableReturnType, UniTable, UniTableColumnPropsType, UniForm, UniFormItemPropsType } from 'xuzn-ui'
import { computed } from 'vue'
interface PropsType {
  formModel: Record<string, any>
  tableApi: UseTableReturnType
}
const props = defineProps<PropsType>()

const columns = computed<UniTableColumnPropsType[]>(() => [
  { key: 'select', label: '多选', type: 'selection', align: 'center', width: 65, fixed: 'left' },
  { key: 'index', type: 'index', align: 'center', label: '序号', width: 65, fixed: 'left' },
  { key: 'name', label: '用户名', minWidth: 120, align: 'center' },
  { key: 'age', label: '年龄', width: 80, align: 'center' },
  { key: 'gender', label: '性别', width: 80, align: 'center' },
  { key: 'email', label: '邮箱', minWidth: 300, align: 'center' },
  { key: 'phone', label: '电话', width: 180, align: 'center' },
  { key: 'address', label: '地址', minWidth: 600 },
  { key: 'address1', prop: 'address', minWidth: 600, label: '为了出现滚动条1' },
  { key: 'address2', prop: 'address', minWidth: 600, label: '为了出现滚动条2' },
  { key: 'ops', label: '操作', align: 'center', width: 172, fixed: 'right' },
])
const items = computed<UniFormItemPropsType[]>(() => [
  { key: 'name', label: '用户名' },
  { key: 'age', label: '年龄' },
  { key: 'gender', label: '性别' },
  { key: 'email', label: '邮箱', hidden: true },
  { key: 'phone', label: '电话', hidden: true },
  { key: 'address', label: '地址', hidden: true },
])
</script>
<style lang="scss"></style>
