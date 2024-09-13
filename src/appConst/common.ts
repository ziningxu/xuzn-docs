import vsConfig from 'virtual:server-config'
export const APP_COLORS = ['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff']
// 是否需要鉴权
export const APP_AUTH = false

export function isLocalServer() {
  return vsConfig.command === 'serve'
}
