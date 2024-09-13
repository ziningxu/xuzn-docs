<template>
  <div>
    <el-result icon="success" :title="`欢迎 ${userStore.userName}`"> </el-result>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store'
const userStore = useUserStore()
</script>
<style lang="scss"></style>
