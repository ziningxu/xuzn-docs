<template>
  <UniTable :table-api="tableApi" :columns="columns" hidden-bar hidden-pagination></UniTable>
</template>
<script setup lang="ts">
import { UniTable, UniTableColumnPropsType, useTable } from 'xuzn-ui'
import { computed } from 'vue'
export interface AttrListItemType {
  attr: any
  desc: any
  type?: any
  default?: any
}
interface PropsType {
  type?: 'attr' | 'slot' | 'exposes'
  data?: any[]
}
const props = defineProps<PropsType>()
const tableApi = useTable({
  async api() {
    return { total: 1, rows: props.data || [] }
  },
})
tableApi.onCurrentChange(1)
const columns = computed<UniTableColumnPropsType[]>(() => {
  if (props.type === 'slot') {
    return [
      { key: 'attr', label: '插槽名', width: 140 },
      { key: 'desc', label: '说明' },
    ]
  }
  if (props.type === 'exposes') {
    return [
      { key: 'attr', label: '方法名', width: 140 },
      { key: 'desc', label: '说明' },
      { key: 'type', label: 'Type', width: 140 },
    ]
  }
  return [
    { key: 'attr', label: '属性名', width: 140 },
    { key: 'desc', label: '说明' },
    { key: 'type', label: 'Type', width: 140 },
    { key: 'default', label: 'Default' },
  ]
})
</script>
<style lang="scss"></style>
