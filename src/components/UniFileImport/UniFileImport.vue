<template>
  <el-dialog
    :model-value="show"
    @update:model-value="(v) => emit('update:show', v)"
    title="导入"
    :width="550"
    :close-on-click-modal="false"
    append-to-body
    destroy-on-close
  >
    <el-upload
      v-loading="state.loading"
      @change="onFileChange"
      v-model:file-list="fileList"
      class="uni-file-import"
      drag
      action="/"
      :autoUpload="false"
      multiple
      v-bind="$attrs"
    >
      <el-icon class="uni-file-import-icon"><upload-filled /></el-icon>
      <div class="uni-file-import-text">拖拽文件到这里或者 <i>点击上传</i></div>
      <template #tip>
        <div class="uni-file-import-tip">
          <slot name="tip">
            {{ props.maxSize > 0 ? `限制文件最大值 ${props.maxSize}M` : '' }}
            {{ $attrs.accept ? `限制文件格式 ${$attrs.accept}` : '' }}
          </slot>
          <div v-if="demoApi">
            <ElLink :underline="false" type="primary" @click="onDownloadDemo"> 下载导入模板 </ElLink>
          </div>
        </div>
      </template>
    </el-upload>
  </el-dialog>
</template>
<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import { downloadFile, TypeComponentProps } from 'xuzn-ui'
import { ElDialog, ElMessage, ElUpload, UploadUserFile } from 'element-plus'
import { computed, reactive, shallowRef } from 'vue'
import { RequestApiReturnType } from '@/utils/request'
type ElUploadPropsType = TypeComponentProps<typeof ElUpload>
interface PropsType extends /* @vue-ignore */ ElUploadPropsType {
  show?: boolean
  demoApi?: () => Promise<RequestApiReturnType<Blob>>
  importApi?: (fd: FormData, file: File) => Promise<RequestApiReturnType>
  fileName?: string
  fileKey?: string // FormData的对应的文件key
  maxSize?: number // mb 现在一般不限制kb了
}
type EmitsType = {
  'update:show': [val: boolean]
  success: [file: File, files: UploadUserFile[]]
}
interface StateType {
  loading: boolean
}
const props = withDefaults(defineProps<PropsType>(), { maxSize: 50 })
const emit = defineEmits<EmitsType>()
const fileList = shallowRef<UploadUserFile[]>([])
const preFileList = shallowRef<UploadUserFile[]>([...fileList.value])
const maxSize = computed(() => {
  return props.maxSize && props.maxSize > 0 ? props.maxSize * 1024 * 1024 : 0
})
const state = reactive<StateType>({
  loading: false,
})
function onFileChange(uFile: UploadUserFile) {
  const file = uFile?.raw
  onUploadFile(file)
}
async function onUploadFile(file?: File) {
  if (!(file instanceof File)) {
    ElMessage.warning('文件获取失败，请重试')
    return
  }
  if (maxSize.value > 0 && file.size > maxSize.value) {
    ElMessage.warning(`文件不能超出${props.maxSize}M`)
    return
  }
  const fd = new FormData()
  fd.append(props.fileKey || 'file', file)
  if (props.importApi) {
    state.loading = true
    await props
      .importApi(fd, file)
      .catch(() => {
        fileList.value = [...preFileList.value]
        return Promise.reject()
      })
      .finally(() => {
        state.loading = false
      })
  } else {
    // 异步等待，否则无法实时获取fileList数据
    await Promise.resolve()
  }
  preFileList.value = [...fileList.value]
  emit('success', file, [...fileList.value])
}
function onDownloadDemo() {
  if (!props.demoApi) {
    return
  }
  props.demoApi().then((res) => {
    downloadFile(res.data, props.fileName || res.fileName || '未命名')
  })
}
</script>
<style lang="scss">
.uni-file-import {
  .uni-file-import-icon {
    font-size: 67px;
    color: var(--el-text-color-placeholder);
    margin-bottom: 16px;
    line-height: 50px;
  }
  .uni-file-import-text {
    color: var(--el-text-color-regular);
    font-size: 14px;
    text-align: center;
    > i {
      color: var(--el-color-primary);
      font-style: normal;
    }
  }
  .uni-file-import-tip {
    font-size: 12px;
    color: var(--el-text-color-regular);
    margin-top: 7px;
  }
}
</style>
