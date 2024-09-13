<template>
  <!-- exp ignore start -->
  <h1 data-id>本地分页</h1>
  <p>
    <ElText type="warning"> useTable </ElText>
    <ElText> 中有 </ElText>
    <ElText type="warning"> localPaging?: boolean </ElText>
    <ElText> 属性设置为 </ElText>
    <ElText type="warning"> true </ElText>
  </p>
  <p>
    <ElText type="warning"> useTable </ElText>
    <ElText> 中有 </ElText>
    <ElText type="warning"> syncServer?: boolean </ElText>
    <ElText> 属性，设置是否每次翻页都同步线上数据，默认值为 </ElText>
    <ElText type="warning"> true </ElText>
  </p>
  <!-- exp ignore end -->
  <UniTable :tableApi="tableApi" :columns="columns" ref="uniTableRef" />
</template>
<script setup lang="ts">
import { shallowRef } from 'vue'
import { useTable, UniTable, UniTableColumnPropsType } from 'xuzn-ui'
const uniTableRef = shallowRef()
const tableApi = useTable({
  // 设置本地分页
  localPaging: true,
  // 是否每次翻页都同步线上数据，默认为true，false表示只会首次请求
  syncServer: false,
  async api() {
    return getPageList()
  },
})
tableApi.onCurrentChange(1)
const columns: UniTableColumnPropsType[] = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'TITLE' },
]

// 假装这是一个前端请求后端的方法
async function getPageList() {
  console.log('有请求后台数据')
  // 这里就没有分页参数需要传了
  const res = await getServerData()
  const rows = res.result || []
  const total = rows.length
  return { rows, total }
}

// 假装这是一个后台服务
// 直接返回了数组，没有分页数据
async function getServerData() {
  return { code: 200, msg: '成功', result: getRows(150, 1) }
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
