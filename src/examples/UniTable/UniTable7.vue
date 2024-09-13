<template>
  <!-- exp ignore start -->
  <h1 data-id>列配置</h1>
  <p>
    <ElText type="warning"> key </ElText>
    <ElText> 是唯一的，存在时可以忽略 </ElText>
    <ElText type="warning"> prop </ElText>
    <ElText> 属性 </ElText>
    <ElText type="warning"> key: string </ElText>
    <ElText> 属性的值，还可以对应一个插槽名，用于自定义内容 </ElText>
  </p>
  <p>
    <ElText> 列配置时 </ElText>
    <ElText type="warning">UniTableColumnPropsType </ElText>
    <ElText> 的属性 </ElText>
    <ElText type="warning"> hidden?: boolean </ElText>
    <ElText> 可以控制初始是否隐藏 </ElText>
  </p>
  <!-- exp ignore end -->
  <UniTable :tableApi="tableApi" :columns="columns">
    <template #title="{ row }">
      <!-- 这个插槽就是 ElTableColumn 的默认插槽 -->
      <div>{{ row.title + ' - 格式化后1' }}</div>
    </template>
  </UniTable>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus'
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
  { key: 'id', label: 'ID', fixed: true },
  { key: 'title', label: 'TITLE', width: 260 },
  {
    key: 'item1',
    label: '第一列',
    width: 240,
    // 这个插槽就是 ElTableColumn 的插槽
    slots: {
      default({ row }) {
        return h(ElButton, null, {
          default() {
            return row.item1 + ' - 格式化后2'
          },
        })
      },
    },
  },
  { key: 'item2', label: '第二列', hidden: true, width: 200 },
  { key: 'item3', label: '第三列', width: 200 },
  // key必须是唯一的，prop可以重复，prop没有值会读取key
  { key: 'xx', prop: 'item3', label: '第三列', width: 200 },
  { key: 'item4', label: '第四列', width: 200 },
  { key: 'item5', label: '第五列', width: 200 },
  { key: 'item6', label: '第六列', width: 200 },
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
