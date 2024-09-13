<template>
  <!-- exp ignore start -->
  <h1 data-id>基础使用</h1>
  <p>
    <ElText type="warning"> UniSelect </ElText>
    <ElText> 就是将 </ElText>
    <ElText type="warning"> ElOption </ElText>
    <ElText> 改成 </ElText>
    <ElText type="warning"> options </ElText>
    <ElText> 配置传参 </ElText>
  </p>
  <!-- exp ignore end -->
  <UniSelect :options="options" v-model="val" />
</template>
<script setup lang="ts">
import { UniSelect } from 'xuzn-ui'
import { ref } from 'vue'
const val = ref(1)
const options = [
  { value: 1, label: '关羽' },
  { value: 2, label: '张飞' },
]
</script>
