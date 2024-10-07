<template>
  <!-- exp ignore start -->
  <h1 data-id>过滤表单</h1>
  <p>
    <ElText> 可以使用插槽 </ElText>
    <ElText type="warning"> filter_form </ElText>
    <ElText> ，使用后，会在table bar里面显示一个搜索按键，可以控制过滤元素的展示和隐藏 </ElText>
  </p>
  <!-- exp ignore end -->
  <UniTable :tableApi="tableApi" :columns="columns">
    <template #filter_form>
      <UniForm layout-type="lr" :model="formModel" label-width="auto" :items="items" @submit="onFormSubmit"></UniForm>
    </template>
  </UniTable>
</template>
<script setup lang="ts">
import { ElInput, ElMessage } from 'element-plus'
import { useTable, UniTable, UniTableColumnPropsType, UniForm, UniFormItemPropsType } from 'xuzn-ui'
import { computed, h, reactive } from 'vue'
const formModel = reactive({})
const tableApi = useTable({
  async api(tableData) {
    const res = await getPageList({ size: tableData.size, current: tableData.current, param: {} })
    const result = res.result
    return {
      // 必要两个字段
      rows: result.rows,
      total: result.total,
    }
  },
})
tableApi.onCurrentChange(1)
const columns = computed<UniTableColumnPropsType[]>(() => [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'TITLE' },
])
const items = computed<UniFormItemPropsType[]>(() => {
  return [
    { key: 'id', label: 'ID' },
    { key: 'id1', label: 'ID1' },
    { key: 'id2', label: 'ID2' },
    {
      key: 'title',
      label: 'TITLE',
      // 初始隐藏
      hidden: true,
      // 会默认添加v-model
      // 默认就是input可以不写
      component: () => {
        return h(ElInput)
      },
    },
  ]
})
function onFormSubmit() {
  ElMessage.success('提交，控制台查看数据')
  console.log('表单提交', formModel)
}
// 假装这是一个前端请求后端的方法
async function getPageList(params: { size: number; current: number; param?: {} }) {
  return getServerData(params.size, params.current)
}

// 假装这是一个后台服务
async function getServerData(size: number, current: number) {
  return { code: 200, msg: '成功', result: { total: 1000, rows: getRows(size, current) } }
  // 生成测试数据
  function getRows(size: number, current: number) {
    const start = (current - 1) * size
    const arr = new Array(size).fill('').map((_, i) => {
      const index = start + i + 1
      return {
        id: index,
        title: index + ' - 随意',
        item1: index + ' - 关羽',
        item2: index + ' - 张飞',
        item3: index + ' - 赵云',
        item4: index + ' - 马超',
        item5: index + ' - 黄忠',
        item6: index + ' - 张辽',
      }
    })
    return arr
  }
}
</script>
