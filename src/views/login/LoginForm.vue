<template>
  <div>
    <div class="login-header">
      <img src="@/assets/logo.svg" />
      <span>Admin</span>
    </div>
    <el-form :model="formModel" label-width="0" ref="formRef" :rules="rules">
      <el-form-item prop="username">
        <el-input :prefix-icon="User" v-model="formModel.username" clearable placeholder="请输入用户名" @keydown="onIptKeyDown" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input :prefix-icon="Lock" v-model="formModel.password" type="password" show-password clearable placeholder="请输入密码" @keydown="onIptKeyDown" />
      </el-form-item>
      <el-form-item>
        <el-button size="large" style="width: 100%" type="primary" @click="onSubmit"> 登录 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store'
import crypto from '@/utils/crypto'
import { Lock, User } from '@element-plus/icons-vue'
import { ElButton, FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
interface PropsType {
  onDone?: () => void
}
const props = defineProps<PropsType>()
const formRef = ref<FormInstance>()
const userStore = useUserStore()
const formModel = reactive({
  username: '',
  password: '',
})
const rules: FormRules = {
  username: [{ required: true, message: '请输入用户名' }],
  password: [{ required: true, message: '请输入密码' }],
}
async function onSubmit() {
  const params = {
    username: crypto.SM2(formModel.username),
    password: crypto.SM2(formModel.password),
  }
  await formRef.value?.validate()
  await userStore.login(params)
  if (props.onDone) {
    props.onDone()
  } else {
    location.reload()
  }
}
function onIptKeyDown(e: KeyboardEvent | Event) {
  if (e instanceof KeyboardEvent && e.code === 'Enter') {
    onSubmit()
  }
}
</script>
<style lang="scss">
.login-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 10px;
  justify-content: center;
  > img {
    height: 24px;
  }
  > span {
    font-size: 24px;
    font-weight: 700;
  }
}
</style>
