<template>
  <slot v-if="$slots.default"></slot>
  <el-button v-else :type="modelValue ? 'success' : 'default'" :icon="modelValue || 'el-icon-plus'" @click="state.show = true" />
  <el-dialog align-center :model-value="state.show" @update:model-value="onUpdateShow" title="图标选择器" :width="800" append-to-body destroy-on-close>
    <div style="display: flex; gap: 15px">
      <el-input v-model="state.iconKw" placeholder="请输入关键字" size="large" clearable />
      <div>
        <el-button v-if="modelValue" type="success" size="large" :icon="modelValue"></el-button>
      </div>
      <div>
        <el-button type="danger" size="large" @click="onIconClick()">清除选中</el-button>
      </div>
    </div>
    <el-tabs v-model="state.tabActive" class="demo-tabs">
      <el-tab-pane :label="`默认(${showElIcons.length})`" name="1">
        <el-scrollbar height="400px">
          <el-empty v-if="showElIcons.length == 0" :image-size="100" description="未查询到相关图标" />
          <div class="uni-icon-ul">
            <div v-for="key in showElIcons" :key="key">
              <el-button size="large" :icon="key" @click="onIconClick(key)"></el-button>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
      <el-tab-pane :label="`扩展${showUniIcons.length}`" name="2">
        <el-scrollbar height="400px">
          <el-empty v-if="showUniIcons.length == 0" :image-size="100" description="未查询到相关图标" />
          <div class="uni-icon-ul">
            <div v-for="key in showUniIcons" :key="key">
              <el-button size="large" :icon="key" @click="onIconClick(key)"></el-button>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
<script setup lang="ts">
import { ElButton, ElDialog } from 'element-plus'
import { computed, reactive, watch } from 'vue'
import * as elIcons from '@element-plus/icons-vue'
import * as uniIcons from '@/icons'
interface PropsType {
  modelValue?: string
  show?: boolean
  noAutoClose?: boolean
  hasSubmit?: boolean
  'onUpdate:show'?: (val: boolean) => void
  'onUpdate:modelValue'?: (key?: string) => void
}
defineOptions({ inheritAttrs: false })
const props = defineProps<PropsType>()
const state = reactive({
  tabActive: '1',
  iconKw: '',
  show: props.show,
})
watch(
  () => props.show,
  (v) => {
    state.show = v
  },
)
// console.log(elIcons, uniIcons)
const showElIcons = computed(() => {
  // 首页已经注册，这里只需要对应上名字即可
  const keys = Object.keys(elIcons).map((key) => `ElIcon${key}`)
  const kw = state.iconKw && typeof state.iconKw === 'string' ? state.iconKw.trim().toLocaleLowerCase() : ''
  if (kw) {
    return keys.filter((key) => key.toLocaleLowerCase().includes(kw))
  }
  return keys
})
const showUniIcons = computed(() => {
  // 首页已经注册，这里只需要对应上名字即可
  const keys = Object.keys(uniIcons).map((key) => `UniIcon${key}`)
  const kw = state.iconKw && typeof state.iconKw === 'string' ? state.iconKw.trim().toLocaleLowerCase() : ''
  if (kw) {
    return keys.filter((key) => key.toLocaleLowerCase().includes(kw))
  }
  return keys
})
function onIconClick(key?: string) {
  props['onUpdate:modelValue']?.(key)
  if (!props.noAutoClose) {
    onUpdateShow(false)
  }
}
function onUpdateShow(v: boolean) {
  state.show = v
  props['onUpdate:show']?.(v)
}
</script>
<style lang="scss" scoped>
.uni-icon-ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
}
</style>
