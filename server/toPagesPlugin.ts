import { Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import ignore from 'ignore'
import { Base64 } from 'js-base64'
// 自动整理路由页面
export type ToPagesItemKVType = [string, string]
export interface ToPagesItemFormatType {
  dir: string
  file: string
  sk: string
  abbSk: string
  formatSk: string
  sv: string
  formatSv: string
  outFile: string
}
export interface ToPagesPathItemType {
  dirs: string[]
  outFile: string
  outType?: 'sync' | 'async'
  keyToBase64?: boolean
  onAfterFormatItem?: (formatItem: ToPagesItemFormatType, item: ToPagesPathItemType) => ToPagesItemFormatType
  onAfterMerge?: (formatItems: ToPagesItemFormatType[], item: ToPagesPathItemType) => any
}
export interface ToPagesConfigType {
  paths?: ToPagesPathItemType[]
  includes?: string[]
  filterPath?: (src: string) => boolean
}
export function formatPages(config?: ToPagesConfigType) {
  const _config = config || {}
  const includes = _config.includes || ['src/views/**/index.vue']
  const ig = ignore().add(includes)
  const paths =
    _config.paths && _config.paths.length
      ? _config.paths
      : [
          {
            dirs: ['./src/views'],
            outFile: './src/router/u_pages.ts',
          },
        ]
  function formatItemFn(dir: string, file: string, item: ToPagesPathItemType): ToPagesItemFormatType {
    const poObj = path.parse(item.outFile)
    const pd = path.relative(dir, file).replace(/\\/g, '/')
    let pf = path.relative(poObj.dir, file).replace(/\\/g, '/')
    pf = pf.startsWith('.') ? pf : './' + pf
    const abbSk = pd.replace('/index.vue', '').replace('.vue', '')
    // {
    //   dir: '/Users/linxu/work/uni-docs/src/examples',
    //   file: '/Users/linxu/work/uni-docs/src/examples/UniTable2.vue',
    //   sk: 'UniTable2.vue',
    //   abbSk: 'UniTable2',
    //   formatSk: 'VW5pVGFibGUy',
    //   sv: './UniTable2.vue',
    //   formatSv: "() => import('./UniTable2.vue')",
    //   outFile: '/Users/linxu/work/uni-docs/src/examples/u_pages.ts',
    // }
    const format: ToPagesItemFormatType = {
      dir,
      file,
      sk: pd,
      abbSk,
      formatSk: Base64.encode(abbSk),
      sv: pf,
      formatSv: `() => import('${pf}')`,
      outFile: item.outFile,
    }
    if (item.onAfterFormatItem) {
      // 拦截
      return item.onAfterFormatItem(format, item)
    }
    return format
  }
  const mergeFormatItems = (formatItems: ToPagesItemFormatType[], item: ToPagesPathItemType) => {
    if (item.onAfterMerge) {
      const res = item.onAfterMerge(formatItems, item)
      if (typeof res === 'string') {
        fs.writeFileSync(item.outFile, res)
      }
      return
    }
    if (item.outType === 'sync') {
      const arr = formatItems.map((o, i) => {
        const k1 = `key${i + 1}`
        return {
          val: k1,
          key: item.keyToBase64 !== false ? o.formatSk : o.abbSk,
          imp: `import ${k1}  from '${o.sv}'`,
        }
      })
      const s1 = arr.map((o) => o.imp).join('\n')
      const s2 = arr.map((o) => `'${o.key}': ${o.val}`).join(',\n')
      const code = `${s1}\nconst pages = {\n${s2}\n};\nexport default pages`
      fs.writeFileSync(item.outFile, code)
    } else {
      // 合并整理后的字符串，准备输出到对应文件中
      const str = formatItems.map((o) => `'${item.keyToBase64 !== false ? o.formatSk : o.abbSk}': ${o.formatSv}`).join(',\n')
      const code = `const pages = {\n${str}\n};\nexport default pages`
      fs.writeFileSync(item.outFile, code)
    }
  }
  function filterUrl(url: string) {
    try {
      if (_config.filterPath) {
        return _config.filterPath(url)
      }
      if (!includes.length) {
        // 必须匹配数据
        return false
      }
      return ig.ignores(path.relative(process.cwd(), url))
    } catch (error) {
      return false
    }
  }
  function toPages() {
    paths.forEach((o) => {
      codeToFile({
        ...o,
        outFile: path.resolve(o.outFile),
        dirs: o.dirs.map((s) => path.resolve(s)),
      })
    })
  }
  function codeToFile(item: ToPagesPathItemType) {
    const formatItems = item.dirs
      .map((dir) => {
        return eachDir(dir)
          .filter(filterUrl)
          .map((file) => {
            return formatItemFn(dir, file, item)
          })
      })
      .flat()
    mergeFormatItems(formatItems, item)
  }

  // nodejs 遍历文件夹
  function eachDir(dirSrc: string) {
    let arr: string[] = []
    fn(dirSrc)
    function fn(dirs: string, level = 0) {
      let list = fs.readdirSync(dirs)
      list.forEach((s) => {
        const filePath = path.join(dirs, s)
        let stat = fs.statSync(filePath)
        if (stat.isDirectory()) {
          fn(filePath, level + 1)
        } else {
          arr.push(filePath)
        }
      })
    }
    return arr
  }
  return { toPages, filterUrl }
}
function toPagesPlugin(config?: ToPagesConfigType) {
  const papi = formatPages(config)
  const pl: Plugin = {
    name: 'toPagesPlugin',
    config() {
      // 初始手动触发一次
      papi.toPages()
    },
    watchChange(id, change) {
      // console.log("🚀 ~ watchChange ~ id, change:", id, change)
      if (change.event === 'create' || change.event === 'delete') {
        // 只处理新增或删除
        if (papi.filterUrl(id)) {
          papi.toPages()
        }
      }
    },
  }
  return pl
}
export default toPagesPlugin
