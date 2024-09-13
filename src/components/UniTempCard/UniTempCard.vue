<template>
  <div class="uni-temp">
    <div class="uni-temp-box">
      <slot></slot>
    </div>
    <ElDivider style="margin: 0; padding: 0" />
    <div class="uni-temp-ops">
      <ElTooltip content="在 Playground 中编辑">
        <el-icon @click="onToRepl"><Playground /></el-icon>
      </ElTooltip>
      <ElTooltip content="复制代码">
        <el-icon @click="onCopy"><CopyDocument /></el-icon>
      </ElTooltip>
      <ElTooltip content="查看源代码">
        <el-icon @click="onSourceCode"><Code /></el-icon>
      </ElTooltip>
    </div>
    <div class="uni-temp-code" v-if="showSourceCodeRef">
      <HighlightCode :txt="txt" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Code, Playground } from '@/icons'
import { CopyDocument } from '@element-plus/icons-vue'
import { ElMessage, ElTooltip } from 'element-plus'
import HighlightCode from '../HighlightCode'
import { clipboardWriteText } from 'xuzn-ui'
import { ref } from 'vue'
import { toReplFiles } from '@/storage'
interface PropsType {
  txt: string
}
const props = defineProps<PropsType>()
const showSourceCodeRef = ref(false)
function onToRepl() {
  const urlObj = new URL(location.href)
  urlObj.hash = '#/repl'
  toReplFiles({ 'src/App.vue': props.txt })
  window.open(urlObj.toString())
  toReplFiles('')
}
function onCopy() {
  clipboardWriteText(props.txt || '没有内容').then(() => {
    ElMessage.success('复制成功')
  })
}
function onSourceCode() {
  showSourceCodeRef.value = !showSourceCodeRef.value
}
</script>
<style lang="scss" scoped>
.uni-temp {
  margin-top: 15px;
  border: 1px var(--el-border-color) var(--el-border-style);
  &:first-child {
    margin-top: 0;
  }
  .uni-temp-box {
    padding: 15px;
  }
  .uni-temp-ops {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    > * {
      cursor: pointer;
    }
  }
}
</style>
