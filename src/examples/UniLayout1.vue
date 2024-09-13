<template>
  <div>
    <h1 data-id>默认布局</h1>
    <LayoutIndex :menus="menus" :menuActive="routeName" :tagActive="routeName" @tagItemClick="onTagItemClick" @menuItemClick="onMenuItemClick"></LayoutIndex>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { LayoutIndex } from 'xuzn-ui'
const menus = [
  { name: 'index', title: '首页' },
  { name: 'index1', title: '首页1' },
]
const routeName = 'index'
function onTagItemClick() {
  ElMessage.success('标签页点击，请查看命令行')
  console.log('------> 标签页点击', ...arguments)
}
function onMenuItemClick() {
  ElMessage.success('菜单点击，请查看命令行')
  console.log('------> 菜单点击', ...arguments)
}
</script>
<style lang="scss"></style>
