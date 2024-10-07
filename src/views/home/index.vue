<template>
  <div>
    <el-result icon="success" :title="`欢迎 ${userStore.userName}`"> </el-result>
    <div style="width: 600px; margin: 0 auto">
      <el-alert type="success" :closable="false">npx xuzn-cli@latest appName</el-alert>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store'
const userStore = useUserStore()
</script>
<style lang="scss"></style>
