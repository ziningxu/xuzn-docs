import { Plugin } from 'vite'
import fs from 'fs'
function transformExamplesPlugin() {
  const pl: Plugin = {
    name: 'transformExamplesPlugin', // 必须的，将会在 warning 和 error 中显示
    transform(code, id) {
      const suffix = '?txt'
      if (id.endsWith(suffix)) {
        const str = (fs.readFileSync(id.slice(0, -suffix.length)) + '')
        .replace(/\s+\<\!--\s+exp ignore start\s+--\>[\s\S]+?\<\!--\s+exp ignore end\s+--\>/g, '')
        const res = `
const str = \`${str.replace(/\`/g, '\\`').replace(/\$\{/g, '\\${')}\`
export default str
        `
        return {
          code: res,
          map: null,
        }
      }
    },
  }
  return pl
}
export default transformExamplesPlugin
