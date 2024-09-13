<template>
  <div style="width: 100%; height: 100%; position: relative; display: grid; grid-template-columns: 1fr 1fr">
    <div style="width: 100%; height: 100%; overflow: hidden">
      <textarea style="width: 100%; height: 100%; background: #eee; box-sizing: border-box; border: 0" v-model="val"></textarea>
    </div>
    <div style="width: 100%; height: 100%; overflow: auto">
      <pre><code>{{formatVal}}</code></pre>
    </div>
    <ElButton :disabled="!formatVal" @click="onCopy" style="position: absolute; right: 15px; top: 15px" type="primary">copy</ElButton>
  </div>
</template>
<script setup lang="ts">
import { ElButton, ElMessage } from 'element-plus'
import { clipboardWriteText } from 'xuzn-ui'
import { ref, watch } from 'vue'
const val = ref('')
const formatVal = ref('')
watch(
  () => val.value,
  (val) => {
    formatVal.value = html2Escape(val)
  },
)
function onCopy() {
  clipboardWriteText(formatVal.value || '没有内容').then(() => {
    ElMessage.success('复制成功')
  })
}
function html2Escape(sHtml: string) {
  return sHtml.replace(/[<>&"]/g, function (c) {
    return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c] || c
  })
}
</script>
<style lang="scss"></style>
