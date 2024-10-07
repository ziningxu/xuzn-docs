<template>
  <el-container style="height: 100%">
    <el-main style="padding: 0">
      <IndexTable style="height: 100%" :tableApi="tableApi" :formModel="formModel" @selection-change="(v) => (selectionRef = v)">
        <template #default="{ row }">
          <UniOperateBtns :options="operateBtns" :clickParams="{ row }"></UniOperateBtns>
        </template>
        <template #bar_right>
          <ElButton type="primary" @click="modifyApi.onAdd()" icon="ElIconPlus">新增</ElButton>
          <el-popconfirm :title="`确认删除选中（${selectionRef.length}）项吗？`" @confirm="() => onDel()">
            <template #reference>
              <ElButton type="danger" :disabled="!selectionRef.length" icon="ElIconDelete">删除</ElButton>
            </template>
          </el-popconfirm>
        </template>
      </IndexTable>
    </el-main>
    <UniDrawer v-model="modifyApi.state.show" :title="modifyApi.getTypeText()" destroy-on-close>
      <RowModify ref="rowModifyRef" :modifyApi="modifyApi" :tableApi="tableApi" />
      <template #btns>
        <template v-if="!modifyApi.state.readonly">
          <el-button type="primary" @click="rowModifyRef?.onSubmit">保存</el-button>
        </template>
      </template>
    </UniDrawer>
  </el-container>
</template>
<script setup lang="ts">
import { UniDrawer, UniOperateBtnType, useModify, useTable, UniOperateBtns } from 'xuzn-ui'
import IndexTable from './indexTable.vue'
import { getPageList, pageListDel } from './api'
import { computed, reactive, shallowRef } from 'vue'
import { ElMessage } from 'element-plus'
import RowModify from './rowModify.vue'
const formModel = reactive({})
const selectionRef = shallowRef([])
const tableApi = useTable({
  async api(tableData) {
    return getPageList({ current: tableData.current, size: tableData.size, params: { ...formModel } })
  },
})
tableApi.onCurrentChange(1)
// 新增，详情，编辑的数据整理
const modifyApi = useModify(formatModel)
const rowModifyRef = shallowRef()
function formatModel(row: any) {
  // 格式化编辑数据
  if (row) {
    return { ...row }
  }
  return {}
}
const operateBtns = computed<UniOperateBtnType[]>(() => [
  { key: '详情', onClick: ({ row }) => modifyApi.onShow(row) },
  { key: '编辑', onClick: ({ row }) => modifyApi.onEdit(row) },
  { key: '删除', onClick: ({ row }) => onDel([row]), confirmText: '确认删除吗？' },
])
function onDel(rows: any[] = selectionRef.value) {
  // 删除
  pageListDel({ ids: rows.map((o) => o.userId) }).then(() => {
    tableApi.onSearch()
    ElMessage.success('删除成功')
  })
}
</script>
<style lang="scss"></style>
