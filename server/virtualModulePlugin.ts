import { Plugin, ResolvedConfig } from 'vite'

export function virtualModuleConfigPlugin() {
  const virtualModuleId = 'virtual:server-config'
  const resolvedVirtualModuleId = '\0' + virtualModuleId
  let config: ResolvedConfig
  const pl: Plugin = {
    name: 'virtual:server-config', // 必须的，将会在 warning 和 error 中显示
    configResolved(resolvedConfig) {
      // 存储最终解析的配置
      config = resolvedConfig
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const val = {command: config.command}
        return `const val = ${JSON.stringify(val)}; export default val;`
      }
    },
  }
  return pl
}
