<template>
  <div class="login-page">
    <LoginForm @done="onLoginDone" />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import LoginForm from './LoginForm.vue'
import { routerHistory } from '@/utils/routerHistory'
const router = useRouter()
function onLoginDone() {
  const rs = routerHistory()
  if (rs.length) {
    router.push(rs[0])
  } else {
    router.push('/')
  }
}
</script>
<style lang="scss">
.login-page {
  width: 600px;
  margin: 50px auto;
}
</style>
