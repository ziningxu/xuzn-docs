<template>
  <!-- exp ignore start -->
  <h1 data-id>默认隐藏列</h1>
  <p>
    <ElText> 列配置时 </ElText>
    <ElText type="warning">UniTableColumnPropsType </ElText>
    <ElText> 的属性 </ElText>
    <ElText type="warning"> hidden?: boolean </ElText>
    <ElText> 可以控制初始是否隐藏 </ElText>
  </p>
  <!-- exp ignore end -->
  <UniTable :tableApi="tableApi" :columns="columns" />
</template>
<script setup lang="ts">
import { useTable, UniTable, UniTableColumnPropsType } from 'xuzn-ui'

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
const columns: UniTableColumnPropsType[] = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'TITLE', hidden: true },
]

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
