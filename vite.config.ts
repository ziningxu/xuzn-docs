import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { toPagesPlugin, transformExamplesPlugin, virtualModuleConfigPlugin } from './server'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      vue(),
      vueJsx(),
      virtualModuleConfigPlugin(),
      toPagesPlugin({
        includes: ['src/examples/**/*.vue'],
        paths: [
          {
            // 没有输出，为了生成一个空的文件
            dirs: ['./src/views'],
            outFile: './src/router/u_pages.ts',
          },
          {
            dirs: ['./src/examples'],
            outFile: './src/examples/u_pages.ts',
            onAfterMerge(formatItems) {
              const arr = formatItems.map((o, i) => {
                const k1 = `key${i + 1}`
                return {
                  val: k1,
                  key: o.abbSk,
                  imp: `import ${k1}  from '${o.sv}'`,
                  imp1: `import ${k1}_txt  from '${o.sv}?txt'`,
                }
              })
              const s1 = arr.map((o) => `${o.imp}\n${o.imp1}`).join('\n')
              const s2 = arr.map((o) => `'${o.key}': ${o.val},\n'${o.key}_txt': ${o.val}_txt`).join(',\n')
              return `${s1}\nconst pages = {\n${s2}\n};\nexport default pages`
            },
          },
        ],
      }),
      transformExamplesPlugin(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: { outDir: 'docs', },
    server: {
      host: '0.0.0.0',
      port: 5071,
      proxy: {
        '/uni': {
          target: 'http://192.168.0.1:8081',
          ws: true,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/uni/, '/uni'),
        },
      },
    },
  }
})
