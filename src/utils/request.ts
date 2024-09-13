import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { toLogin } from '@/router'
import { useAppStore } from '@/store'
import { uniStorage } from 'xuzn-ui'

export interface RequestApiReturnType<T = any> {
  data: T
  res?: AxiosResponse
  blobJson?: any
  fileName?: string
}
export interface UniRequestConfig extends AxiosRequestConfig {
  cache?: boolean
  cacheKey?: string
  cacheIsSession?: boolean
}
const service = axios.create({
  baseURL: '',
  method: 'post',
  timeout: 60 * 1000,
})
function formatAxiosConfig(config: UniRequestConfig) {
  // 加密，签字配置
  // console.warn('------> 待完善')
  return config
}
async function resBlobToJson(data: any) {
  let blobJson: any = {}
  if (data instanceof Blob && data.type === 'application/json') {
    // json格式的blob数据，解析一下存起来
    try {
      blobJson = await new Response(data).json()
    } catch (error) {}
  }
  return blobJson
}
export async function requestApi<T = any>(config: UniRequestConfig): Promise<RequestApiReturnType<T>> {
  const cacheId = config.cacheKey || config.url + ''
  if (config.cache) {
    // 数据本地缓存 默认 session
    const cacheIsSession = typeof config.cacheIsSession === 'boolean' ? config.cacheIsSession : true
    const val = uniStorage(cacheId, null, cacheIsSession)
    if (val) {
      return val
    }
  }
  const appStore = useAppStore()
  const successCodes = ['0', '200']
  formatAxiosConfig(config)
  appStore.showTopProgress = true
  return service(config)
    .then(async (res) => {
      const data = res.data
      const blobJson: any = await resBlobToJson(data)
      const code = (data?.code || blobJson?.code || res.status) + ''
      if (successCodes.includes(code)) {
        return onSuccess(res, blobJson)
      }
      return Promise.reject(res)
    })
    .catch(onError)
    .finally(() => {
      appStore.showTopProgress = false
    })
  async function onSuccess(res: AxiosResponse, blobJson?: any): Promise<RequestApiReturnType<T>> {
    const des = (res.headers['content-disposition'] || '') + ''
    const fileName = decodeURIComponent((des.match(/(?<=filename\=)[^\s;]+/) || [])[0] || '')
    const val = {
      data: config.responseType === 'blob' ? res.data : res.data?.data,
      res,
      blobJson,
      fileName,
    }
    if (config.cache) {
      uniStorage(cacheId, val, true)
    }
    return val
  }
  async function onError(err: any): Promise<any> {
    const data = err?.response?.data || err?.data || {}
    const blobJson: any = await resBlobToJson(data)
    const msg = data.msg || blobJson?.msg || '未知错误'
    const code = (data.code || err.status) + ''
    err.blobJson = blobJson
    if (code === '401') {
      if (appStore.showLogin) {
        // 只报错一次
        return Promise.reject(err)
      }
      // 身份过期
      toLogin()
    }
    ElMessage.error(msg)
    return Promise.reject(err)
  }
}
