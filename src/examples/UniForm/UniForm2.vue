<template>
  <!-- exp ignore start -->
  <h1 data-id>兼容用法</h1>
  <p>
    <ElText> 是可以兼容 </ElText>
    <ElText type="warning"> ElForm </ElText>
    <ElText> 语法的，在子元素中使用 </ElText>
    <ElText type="warning"> ElFormItem </ElText>
  </p>
  <!-- exp ignore end -->
  <UniForm :model="formModel" label-width="auto">
    <ElFormItem label="ID">
      <ElInput v-model="formModel.ipt" />
    </ElFormItem>
  </UniForm>
</template>
<script setup lang="ts">
import { ElFormItem } from 'element-plus'
import { UniForm } from 'xuzn-ui'
import { reactive } from 'vue'
const formModel = reactive({ ipt: '' })
</script>
