<template>
  <Repl
    :editor="Monaco"
    :store="store"
    :clear-console="false"
    :previewOptions="previewOptions"
    preview-theme
    :theme="uniGlobalState.dark ? 'dark' : undefined"
  />
</template>
<script setup lang="ts">
import { Repl, useStore, useVueImportMap } from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'
import { TypeComponentProps, uniGlobalState } from 'xuzn-ui'
import AppCode from '@/examples/App.vue?txt'
import { computed, onMounted } from 'vue'
type ReplPropsType = TypeComponentProps<typeof Repl>
interface PropsType {
  files?: Record<string, string>
  onChange?: (hash: string, files: Record<string, string>) => void
}
const props = defineProps<PropsType>()
const vueImportMap = useVueImportMap({
  runtimeDev: 'https://fastly.jsdelivr.net/npm/@vue/runtime-dom@3.5.2/dist/runtime-dom.esm-browser.js',
  runtimeProd: 'https://fastly.jsdelivr.net/npm/@vue/runtime-dom@3.5.2/dist/runtime-dom.esm-browser.min.js',
  serverRenderer: 'https://fastly.jsdelivr.net/npm/@vue/server-renderer@3.5.2/dist/server-renderer.esm-browser.min.js',
})
const previewOptions: ReplPropsType['previewOptions'] = {
  headHTML: `
<link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/element-plus@latest/dist/index.css">
<link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/element-plus@latest/theme-chalk/dark/css-vars.css">
<link rel="stylesheet" href="./repl/xuzn-ui.css">
  `,
  customCode: {
    importCode: `
import ElementPlus from 'element-plus'
import { ElTooltip } from 'element-plus'
    `,
    useCode: `
ElTooltip.props.appendTo.default = 'body'
app.use(ElementPlus)
    `,
  },
}
const builtinImportMap = computed(() => {
  return {
    ...vueImportMap.importMap.value,
    imports: {
      ...(vueImportMap.importMap.value.imports || {}),
      'element-plus': 'https://fastly.jsdelivr.net/npm/element-plus@latest/dist/index.full.min.mjs',
      '@element-plus/icons-vue': 'https://fastly.jsdelivr.net/npm/@element-plus/icons-vue@2/dist/index.min.js',
      sortablejs: 'https://fastly.jsdelivr.net/npm/sortablejs@1.15.2/+esm',
      'xuzn-ui': './repl/xuzn-ui.es.js',
    },
  }
})
const store = useStore({
  builtinImportMap,
})
// watchEffect(() => {
//   const hash = store.serialize()
//   const files = store.getFiles()

// })
onMounted(() => {
  store.setFiles({
    ...store.getFiles(),
    'src/App.vue': AppCode,
    ...(props.files || {}),
  })
})
</script>
<style lang="scss"></style>
