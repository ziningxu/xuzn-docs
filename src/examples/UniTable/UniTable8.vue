<template>
  <!-- exp ignore start -->
  <h1 data-id>列插槽</h1>
  <p>
    <ElText> 可以给一个 </ElText>
    <ElText type="warning"> slots </ElText>
    <ElText> 属性，然后用 </ElText>
    <ElText type="warning"> h </ElText>
    <ElText> 函数写插槽 </ElText>
    <ElText type="warning"> slots?: Record&lt;string, ((...args: any[]) =&gt; VNodeChild) | undefined&gt; </ElText>
  </p>
  <p>
    <ElText> 也可以是对应的 </ElText>
    <ElText type="warning"> key </ElText>
    <ElText> 的值。每个 </ElText>
    <ElText type="warning"> key: string </ElText>
    <ElText> 的值对应一个插槽名 </ElText>
  </p>
  <p>
    <ElText> 快速渲染 </ElText>
    <ElText type="warning"> default </ElText>
    <ElText> 插槽，可以使用 </ElText>
    <ElText type="warning"> component?: (...args: any[]) => VNodeChild </ElText>
  </p>
  <!-- exp ignore end -->
  <UniTable :tableApi="tableApi" :columns="columns">
    <!-- 对应key加_,后面就是其他插槽名 -->
    <!-- 比如这里title列的header插槽语法如下 -->
    <template #title_header> 抬头插槽，对应key </template>
    <!-- 默认就是default插槽 -->
    <template #title="{ row }"> {{ row.title }} 内容插槽，对应key </template>
  </UniTable>
</template>
<script setup lang="ts">
import { useTable, UniTable, UniTableColumnPropsType } from 'xuzn-ui'
import { h } from 'vue'

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
  {
    key: 'id',
    slots: {
      default({ row }) {
        return h(
          'span',
          { style: 'color: #f00' },
          {
            default() {
              return row.id + '，h函数，内容插槽'
            },
          },
        )
      },
      header() {
        return 'h函数抬头插槽ID'
      },
    },
  },
  { key: 'title', label: 'TITLE' },
  {
    key: 'item1',
    label: 'ITEM1',
    component({ row }) {
      return row.item1 + '，快速渲染default'
    },
  },
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
