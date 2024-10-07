<template>
  <UniForm ref="formRef" :items="items" :model="modifyModel" :rules="rules" :disabled="modifyState.readonly" label-width="100px"> </UniForm>
</template>

<script lang="tsx" setup>
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import { pageListAdd, pageListEdit } from './api'
import { computed, ref } from 'vue'
import { UniForm, UniFormItemPropsType, UseModifyReturnType, UseTableReturnType } from 'xuzn-ui'
interface PropsType {
  modifyApi: UseModifyReturnType
  tableApi: UseTableReturnType
  onEnd?: (type?: string) => void
}
const props = defineProps<PropsType>()
const modifyState = props.modifyApi.state
const modifyModel = props.modifyApi.model
const formRef = ref<FormInstance>()

const rules: FormRules = {
  name: [{ required: true, message: '请输入用户名' }],
}
const items = computed<UniFormItemPropsType[]>(() => [
  { key: 'name', label: '用户名' },
  { key: 'age', label: '年龄' },
  { key: 'gender', label: '性别' },
  { key: 'email', label: '邮箱' },
  { key: 'phone', label: '电话' },
  { key: 'address', label: '地址' },
])
init()
function init() {}
function onSubmit() {
  const params = {
    ...modifyModel,
  }
  formRef.value?.validate().then(async () => {
    if (modifyState.type === 'edit') {
      await pageListEdit(params)
      ElMessage.success('编辑成功')
    } else if (modifyState.type === 'add') {
      await pageListAdd(params)
      ElMessage.success('新增成功')
    }
    props.tableApi.onSearch()
    modifyState.show = false
    props.onEnd?.('submit')
  })
}
function onCancel() {
  props.tableApi.onSearch()
  modifyState.show = false
  props.onEnd?.('cancel')
}
defineExpose({ onCancel, onSubmit })
</script>
