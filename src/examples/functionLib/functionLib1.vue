<template>
  <h2 data-id>写入剪贴板</h2>
  <ElInput v-model="state.clipVal" placeholder="请输入需要复制的文案">
    <template #append>
      <ElButton @click="copy">复制</ElButton>
    </template>
  </ElInput>
  <h2 data-id>颜色值转换</h2>
  <el-color-picker v-model="state.color" />
  <h3 data-id data-level="1">hex - rgb</h3>
  <p>
    <ElText :style="`color: ${state.color};`">{{ state.color }}</ElText>
    <ElText> -> </ElText>
    <ElText :style="`color: ${state.color};`">{{ hexToRgb(state.color) }}</ElText>
  </p>
  <h3 data-id data-level="1">rgb - hex</h3>
  <p>
    <ElText :style="`color: ${state.color};`">{{ hexToRgb(state.color) }}</ElText>
    <ElText> -> </ElText>
    <ElText :style="`color: ${state.color};`">{{ rgbToHex(...hexToRgb(state.color)) }}</ElText>
  </p>
  <h3 data-id data-level="1">颜色加深</h3>
  <div style="display: flex; gap: 10px; color: #fff">
    <div v-for="i in 9" :style="`background: ${darken(state.color, i / 10)}; width: 80px; line-height: 80px; text-align: center`">
      {{ darken(state.color, i / 10) }}
    </div>
  </div>
  <h3 data-id data-level="1">颜色变浅</h3>
  <div style="display: flex; gap: 10px; color: #fff">
    <div v-for="i in 9" :style="`background: ${lighten(state.color, i / 10)}; width: 80px; line-height: 80px; text-align: center`">
      {{ lighten(state.color, i / 10) }}
    </div>
  </div>
  <h3 data-id data-level="1">ElementPlus 主题变量</h3>
  <pre><code>{{ JSON.stringify(getElePrimaryColor(state.color), null, 2) }}</code></pre>
  <h2 data-id>json 拷贝</h2>
  <ElText type="primary">cloneJson({a: 'b'})</ElText>
  <h2 data-id>文件下载</h2>
  <p>
    <ElText>主要用于配合后台下载文件的</ElText>
  </p>
  <ElInput type="textarea" v-model="state.downloadText" placeholder="请输入文案" />
  <div style="height: 15px"></div>
  <ElInput v-model="state.downloadName" placeholder="请输入文件名">
    <template #append>
      <ElButton @click="downloadFn">下载</ElButton>
    </template>
  </ElInput>
  <h2 data-id>千分位</h2>
  <ElInput v-model="state.numberText" placeholder="请输入数字">
    <template #append>
      {{ splitNumber(state.numberText) }}
    </template>
  </ElInput>
  <h2 data-id>中划线转驼峰</h2>
  <ElInput v-model="state.str1" placeholder="请输入">
    <template #append>
      {{ centerLineToHump(state.str1) }}
    </template>
  </ElInput>
  <p>
    <ElText>首字母也大写</ElText>
  </p>
  <ElInput v-model="state.str2" placeholder="请输入">
    <template #append>
      {{ centerLineToHump(state.str2, true) }}
    </template>
  </ElInput>
  <h2 data-id>对象key转驼峰</h2>
  <p>
    <ElText> 转义 </ElText>
    <ElText type="primary"> useAttrs </ElText>
    <ElText> 数据的 </ElText>
    <ElText type="primary"> key </ElText>
    <ElText> 为驼峰 </ElText>
  </p>
  <ElInput type="textarea" v-model="state.objStr1" :autosize="{ minRows: 4, maxRows: 10 }" />
  <ElAlert v-show="!state.isObjStr1" type="warning">输入有误</ElAlert>
  <pre><code>{{ _toHumpObj() }}</code></pre>
  <h2 data-id>切换全屏</h2>
  <!-- toggleFullScreen(true) 指定全屏 -->
  <!-- toggleFullScreen(false) 指定退出全屏 -->
  <!-- toggleFullScreen(true, {el}) 指定全屏的元素 -->
  <!-- toggleFullScreen(false, {el}) 指定退出全屏的元素 -->
  <!-- toggleFullScreen(null, {el}) 切换全屏的元素 -->
  <ElButton type="primary" @click="toggleFullScreen()">切换</ElButton>
  <h2 data-id>休眠/等待/延迟</h2>
  <ElButton type="primary" @click="_sleep(1000)">延迟1s提示</ElButton>
  <h2 data-id>url query</h2>
  <p>
    <ElText> 无视查询字符串和哈希的顺序，只识别 </ElText>
    <ElText type="warning"> ? </ElText>
    <ElText> ，多个 </ElText>
    <ElText type="warning"> ? </ElText>
    <ElText> 会被合并 </ElText>
  </p>
  <ElInput v-model="state.url" />
  <p>
    <ElText> 格式化查询字符串，重复 </ElText>
    <ElText type="warning">key</ElText>
    <ElText> 后面的覆盖前面的，格式化后 </ElText>
    <ElText type="warning">Record&lt;string, string&gt;</ElText>
  </p>
  <pre><code>{{ JSON.stringify(getUrlQuery(state.url), null, 2) }}</code></pre>
  <p>
    <ElText> 格式化查询字符串，重复 </ElText>
    <ElText type="warning">key</ElText>
    <ElText> 会形成数组，格式化后 </ElText>
    <ElText type="warning">Record&lt;string, string | string[]&gt;</ElText>
  </p>
  <pre><code>{{ JSON.stringify(getUrlQueryHasArray(state.url), null, 2) }}</code></pre>
  <p>
    <ElText> 格式化查询字符串，无论是否有重复的 </ElText>
    <ElText type="warning">key</ElText>
    <ElText> ，值都会是数组，格式化后 </ElText>
    <ElText type="warning">Record&lt;string, string[]&gt;</ElText>
  </p>
  <pre><code>{{ JSON.stringify(getUrlQueryArray(state.url), null, 2) }}</code></pre>
  <p>
    <ElText> 格式化查询字符串 </ElText>
    <ElText type="warning">[string, string][]</ElText>
  </p>
  <pre><code>{{ JSON.stringify(getUrlQueryToArray(state.url), null, 2) }}</code></pre>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { ElMessage, ElText } from 'element-plus'
import {
  clipboardWriteText,
  sleep,
  toggleFullScreen,
  toHumpObj,
  centerLineToHump,
  hexToRgb,
  splitNumber,
  rgbToHex,
  darken,
  lighten,
  getElePrimaryColor,
  downloadFile,
  getUrlQuery,
  getUrlQueryHasArray,
  getUrlQueryToArray,
  getUrlQueryArray,
} from 'xuzn-ui'
const state = reactive({
  clipVal: '这是一段文案',
  color: '#1E90FF',
  downloadText: '这是要下载的文案',
  downloadName: 'a.txt',
  numberText: '1234567890',
  str1: 'uni-form',
  str2: 'uni-form',
  isObjStr1: true,
  objStr1: JSON.stringify({ 'data-box': '1', onClick: '1', 'on-change': '1' }, null, 2),
  url: 'https://www.baidu.com?a=b&c=d&a=c#aa?a=d&e=f',
})
async function _sleep(time: number = 3000) {
  await sleep(time)
  ElMessage.success('延迟提示')
}
function _toHumpObj() {
  state.isObjStr1 = true
  try {
    return JSON.stringify(toHumpObj(JSON.parse(state.objStr1)), null, 2)
  } catch (error) {
    state.isObjStr1 = false
  }
}
function copy() {
  if (state.clipVal.length) {
    clipboardWriteText(state.clipVal).then(() => {
      ElMessage.success('复制成功')
    })
  } else {
    ElMessage.warning('没有可以复制的文案')
  }
}
function downloadFn() {
  if (!state.downloadName) {
    ElMessage.warning('请输入文件名')
  }
  if (state.downloadText.length) {
    const blob = new Blob([state.downloadText])
    downloadFile(blob, state.downloadName)
  } else {
    ElMessage.warning('没有可以下载的文案')
  }
}
</script>
