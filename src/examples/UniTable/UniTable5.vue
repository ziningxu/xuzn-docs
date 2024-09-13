<template>
  <!-- exp ignore start -->
  <h1 data-id>table bar管理</h1>
  <p>
    <ElText> 使用插槽 </ElText>
    <ElText type="warning"> bar_left </ElText>
    <ElText> 在左侧新增或者使用插槽 </ElText>
    <ElText type="warning"> bar_right </ElText>
    <ElText> 在右侧新增，只要是这两个字符串开头就行 </ElText>
  </p>
  <p>
    <ElText> 统一处理更改，可以使用： </ElText>
    <ElText type="warning"> formatBarItems </ElText>
    <ElText> 属性，参数是所有元素集合，返回类似的集合即可 </ElText>
  </p>
  <!-- exp ignore end -->
  <UniTable :formatBarItems="formatBarItems" :tableApi="tableApi" :columns="columns" @bar-click="onBarClick">
    <template #bar_right>
      <ElButton>按键-right1</ElButton>
      <ElButton>按键-right2</ElButton>
    </template>
    <template #bar_right1>
      <ElButton>按键-right3</ElButton>
    </template>
    <template #bar_left>
      <ElButton>按键-left1</ElButton>
    </template>
  </UniTable>
</template>
<script setup lang="ts">
import { ElButton, ElMessage } from 'element-plus'
import { useTable, UniTable, UniTableColumnPropsType, UniTableBarItemType } from 'xuzn-ui'
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
function formatBarItems(items: UniTableBarItemType[]) {
  console.log(items)
  const val: UniTableBarItemType[] = [
    ...items,
    {
      key: 'add1',
      render() {
        return 123
      },
    },
  ]
  return val
}
const columns: UniTableColumnPropsType[] = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'TITLE' },
]

// table bar 点击回调
function onBarClick(item: UniTableBarItemType) {
  ElMessage.success('table bar 点击回调，参数查看控制台')
  console.log(item)
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
