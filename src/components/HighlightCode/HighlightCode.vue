<template>
  <div ref="codeRef" style="position: relative">
    <pre v-if="!!txt"><code :class="`line-numbers language-${lang || 'html'}`">{{(txt ? txt + '' : '')}}</code></pre>
    <slot v-else></slot>
    <ElButton @click="onCopy" :icon="DocumentCopy" size="small" style="position: absolute; right: 15px; top: 15px" type="primary"></ElButton>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { DocumentCopy } from '@element-plus/icons-vue'
import Prism from 'prismjs'
import { clipboardWriteText } from 'xuzn-ui'
import { onMounted, onUpdated, ref } from 'vue'

const props = defineProps<{ txt?: string; lang?: string }>()
const codeRef = ref()
onMounted(init)
onUpdated(init)
function init() {
  const codeEl = codeRef.value && codeRef.value.querySelector('code')
  if (codeEl) Prism.highlightElement(codeEl)
}
function onCopy() {
  const txt = (props.txt || codeRef.value?.querySelector('code')?.innerText || '没有内容').trim()
  clipboardWriteText(txt).then(() => {
    ElMessage.success('复制成功')
  })
}
</script>
<style lang="scss" scoped>
.line-numbers {
  margin: 0 !important;
  border-radius: 0;
}
</style>
