/**
 * 本地缓存
 */

import { storageL } from 'xuzn-ui'

// 用户数据本地缓存
export function tokenStorageL(val?: any, isSession?: boolean) {
  const key = 'APP_TOKEN'
  return storageL(key, val, isSession)
}

// 在线编辑文件存储
export function toReplFiles(val?: any) {
  const key = 'APP_REPL'
  return storageL(key, val, true)
}
