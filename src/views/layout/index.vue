<template>
  <UniExample>
    <template #pre>
      <div>
        <h2 data-id>文件结构</h2>
        <el-alert type="warning">只介绍自定义的，常见就不介绍了</el-alert>
        <div style="height: 15px"></div>
        <ElSpace>
          <el-image style="width: 100px; height: 100px" :src="uni1" :preview-src-list="[uni1]" fit="cover" />
          <el-image style="width: 100px; height: 100px" :src="uni2" :preview-src-list="[uni2]" fit="cover" />
        </ElSpace>
        <p>
          <ElText type="warning"> server </ElText>
          <ElText> 为服务目录，主要存放vite的插件 </ElText>
        </p>
        <p>
          <ElText type="warning"> src/appConst </ElText>
          <ElText> 为全局常量存放目录 </ElText>
        </p>
        <p>
          <ElText type="warning"> src/globalApi </ElText>
          <ElText> 为全局接口存放目录 </ElText>
          <ElText type="danger"> 全局性的api才写在这里 </ElText>
        </p>
        <p>
          <ElText type="warning"> src/storage </ElText>
          <ElText> 请把缓存功能都统一放在此处，方便管理 </ElText>
        </p>
        <p>
          <ElText type="warning"> src/uni-temp </ElText>
          <ElText> 存放一个正删改查页面的模板 </ElText>
          <ElText type="danger"> 后期会写命令行工具，进行命令生成 </ElText>
        </p>
        <p>
          <ElText type="warning"> src/initAppData.tsx </ElText>
          <ElText> 预留文件，初始化项目数据，比如把缓存的数据进行赋值 </ElText>
        </p>
      </div>
      <div style="height: 15px"></div>
      <div>
        <ElDivider />
        <h2 data-id>批量页面引入功能</h2>
        <p>
          <ElText type="warning"> server/toPagesPlugin.ts </ElText>
          <ElText> 可配置型，将指定目录中的指定文件，引入到指定文件中，代替 </ElText>
          <ElText type="warning"> import.meta.glob </ElText>
          <ElText> ，更加灵活和可配置，避免打包文件中出现明文路径，默认会将 </ElText>
          <ElText type="warning"> src/views </ElText>
          <ElText> 文件夹中的所有 </ElText>
          <ElText type="warning"> index.vue </ElText>
          <ElText> 使用异步引入存放于 </ElText>
          <ElText type="warning"> src/router/u_pages.ts </ElText>
          <ElText> 且此文件为自动生成无需上传，默认会git忽略 </ElText>
          <ElText type="danger"> 后期会抽离到函数库中 </ElText>
        </p>
        <h3 data-id data-level="1">异步内容</h3>
        <el-image style="width: 100px; height: 100px" :src="uni3" :preview-src-list="[uni3]" fit="cover" />
        <h3 data-id data-level="1">同步内容</h3>
        <el-image style="width: 100px; height: 100px" :src="uni4" :preview-src-list="[uni4]" fit="cover" />

        <h3 data-id data-level="1">默认配置</h3>
        <p>
          <ElText type="danger"> 默认 </ElText>
        </p>
        <HighlightCode>
          <pre><code :class="`line-numbers language-ts`">
// 默认配置既是将 ./src/views 文件夹中的 所有 index.vue 文件
// 在 ./src/router/u_pages.ts 文件中引入
toPagesPlugin()
</code></pre>
        </HighlightCode>
        <p>
          <ElText type="danger"> 覆盖 </ElText>
        </p>
        <HighlightCode>
          <pre><code :class="`line-numbers language-ts`">
toPagesPlugin({
  // 遵循gitignore的语法
  // 只对匹配的值进行处理，如果是空，那下面的配置将没有意义
  includes: ['src/views/**/index.vue'],
  paths: [
    {
      // 可以指定多个文件夹
      dirs: ['./src/views'],
      // 输出到指定文件中
      outFile: './src/router/u_pages.ts',
    }
  ],
})
</code></pre>
        </HighlightCode>
        <h3 data-id data-level="1">自定义配置</h3>
        <p>
          <ElText type="danger"> 自行处理输出结果 </ElText>
        </p>
        <HighlightCode>
          <pre><code :class="`line-numbers language-ts`">
// formatItems是类似这样的集合，Mac和win有差异
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
export interface ToPagesItemFormatType {
  dir: string // 找到的文件，用户指定的目录
  file: string // 当前文件
  sk: string // 文件相对于 dir 的路径
  abbSk: string // 格式化后，会去掉 /index.vue 和 .vue
  formatSk: string // base64 加密 abbSk
  sv: string // 文件相对于输出文件的路径
  formatSv: string // 默认是异步
  outFile: string // 输出路径
}
toPagesPlugin({
  // 匹配 src/examples 文件夹下的所有 .vue 文件
  includes: ['src/examples/**/*.vue'],
  paths: [
    // 可以指定多条规则
    {
      // 指定文件夹
      dirs: ['./src/examples'],
      // 指定输出到哪个文件夹
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
        // 返回一个字符串，会写入到输出文件中
        // 如果啥也不返回，可以自行写入到你想要的文件中
        return `${s1}\nconst pages = {\n${s2}\n};\nexport default pages`
      },
    },
  ],
}),
</code></pre>
        </HighlightCode>
        <p>
          <ElText type="danger"> 以上配置输出类似下面的内容 </ElText>
        </p>
        <el-image style="width: 100px; height: 100px" :src="uni5" :preview-src-list="[uni5]" fit="cover" />
      </div>
      <div>
        <ElDivider />
        <h2 data-id>项目常量</h2>
        <p>
          <ElText> 存放目录 </ElText>
          <ElText type="warning"> src/appConst </ElText>
          <ElText> ， </ElText>
          <ElText type="danger"> 全局常量存放 </ElText>
        </p>
        <p>
          <ElText type="warning"> getSMKey.ts </ElText>
          <ElText> 文件是为了将明文的关键秘钥token等字符分割，避免打包后太容易被扫描到 </ElText>
        </p>
      </div>
      <div>
        <ElDivider />
        <h2 data-id>全局接口</h2>
        <p>
          <ElText> 存放目录 </ElText>
          <ElText type="warning"> src/globalApi </ElText>
          <ElText> ， </ElText>
          <ElText type="danger"> 全局接口存放 </ElText>
          <ElText>， 页面接口请存放在页面文件夹中，以减少接口冗余 </ElText>
        </p>
      </div>
      <div>
        <ElDivider />
        <h2 data-id>字体图标</h2>
        <p>
          <ElText> 存放目录 </ElText>
          <ElText type="warning"> src/icons </ElText>
        </p>
      </div>
      <div>
        <ElDivider />
        <h2 data-id>路由</h2>
        <p>
          <ElText> 存放目录 </ElText>
          <ElText type="warning"> src/router </ElText>
        </p>
        <h3 data-id data-level="1">线上路由</h3>
        <p>
          <ElText> 登录成功后接口请求，菜单数据，配合 </ElText>
          <ElText type="warning"> vite插件toPagesPlugin </ElText>
          <ElText> ，将 </ElText>
          <ElText type="warning"> src/views/ </ElText>
          <ElText> 目录中所有 </ElText>
          <ElText> index.vue </ElText>
          <ElText> 文件在 </ElText>
          <ElText type="warning"> src/router/u_pages.ts </ElText>
          <ElText type="warning"> 文件中引用并输出类似 </ElText>
          <el-image style="width: 50px; height: 50px" :src="uni3" :preview-src-list="[uni3]" fit="cover" />
          <ElText> 的内容，其中 </ElText>
          <ElText type="warning"> key是base64包装的 </ElText>
          <ElText> ，用于避免路径直接暴露，被扫描到，也方便后期批量更改加密方式 </ElText>
        </p>
        <h3 data-id data-level="1">本地路由</h3>
        <p>
          <ElText> 线上路由和本地路由是可以混合使用的，顺序问题可以使用 </ElText>
          <ElText type="warning"> meta.menuSort </ElText>
          <ElText> 进行配置 </ElText>
        </p>
        <p>
          <ElText> 本地路由入口文件 </ElText>
          <ElText type="warning"> src/router/routes.tsx </ElText>
        </p>
        <h3 data-id data-level="1">meta扩展</h3>
        <HighlightCode>
          <pre><code :class="`line-numbers language-ts`">
interface RouteMeta {
  isMenu?: boolean // 是否是菜单 默认true
  menuSort?: number // 菜单排序
  fullpage?: boolean // 是否业内全屏
}
          </code></pre>
        </HighlightCode>
      </div>
      <div>
        <ElDivider />
        <h2 data-id>本地缓存</h2>
        <p>
          <ElText> 存放目录 </ElText>
          <ElText type="warning"> src/storage </ElText>
        </p>
        <h3 data-id data-level="1">基础缓存</h3>
        <p>
          <ElText> 对应所有的需要本地缓存的数据，请尽可能在此目录 </ElText>
          <ElText type="warning"> src/storage </ElText>
          <ElText> 中书写函数，然后其他地方进行引用，主要为了 </ElText>
          <ElText type="danger"> 方便管理，控制冲突，避免重复缓存 </ElText>
          <ElText> 等问题 </ElText>
        </p>
        <h3 data-id data-level="1">接口缓存</h3>
        <p>
          <ElText type="warning"> import { requestApi } from '@/utils/request' </ElText>
          <ElText> 这是封装好的，请求方法 </ElText>
          <ElText type="warning"> requestApi </ElText>
          <ElText> 中有 </ElText>
          <ElText type="warning"> cache </ElText>
          <ElText> 属性可以控制是否缓存接口，默认缓到 </ElText>
          <ElText type="warning"> session </ElText>
        </p>
        <p>
          <ElText> 扩展 </ElText>
          <ElText type="warning"> AxiosRequestConfig </ElText>
          <ElText> 如下 </ElText>
        </p>
        <HighlightCode>
          <pre><code :class="`line-numbers language-ts`">
export interface UniRequestConfig extends AxiosRequestConfig {
  cache?: boolean // 是否需要缓存
  cacheKey?: string // 缓存的key，默认会使用接口的url
  cacheIsSession?: boolean // 是否使用session缓存，默认true，否则会使用localstorage
}
          </code></pre>
        </HighlightCode>
      </div>
      <div>
        <ElDivider />
        <h2 data-id>pinia状态管理</h2>
        <p>
          <ElText> 存放目录 </ElText>
          <ElText type="warning"> src/store </ElText>
        </p>
        <h3 data-id data-level="1">项目数据</h3>
        <p>
          <ElText> 入口文件 </ElText>
          <ElText type="warning"> src/store/app.ts </ElText>
        </p>
        <HighlightCode>
          <pre><code :class="`line-numbers language-ts`">
export interface AppState {
  showAppSetting: boolean // 打开全局配置界面
  showLogin: boolean // 展示登录界面
  showSearch: boolean // 展示搜索界面
  userInfo: Record&lt;string, any&gt; // 用户数据的原始数据
  menuList: RouteRecordRaw[] // 菜单列表，只包含请求的数据，不包含本地数据
  menuItems: RouteRecordRaw[] // 打平后的菜单数据，只包含请求的数据，不包含本地数据
  dictList: DictItemType[] // 字段列表
  showTopProgress: boolean // 显示顶部进度条
}
          </code></pre>
        </HighlightCode>
        <h3 data-id data-level="1">用户数据</h3>
        <p>
          <ElText> 入口文件 </ElText>
          <ElText type="warning"> src/store/user.ts </ElText>
        </p>
        <HighlightCode>
          <pre><code :class="`line-numbers language-ts`">
export interface UserState  {
  username: string
  realName: string
  mobilePhone: string
  userId: string
  email: string
  avatar: string
  gender: string
  idCardNo: string
  token: string
}
          </code></pre>
        </HighlightCode>
      </div>
      <div>
        <ElDivider />
        <h2 data-id>模板</h2>
        <p>
          <ElText> 存放目录 </ElText>
          <ElText type="warning"> src/uni-temp </ElText>
          <ElText type="danger"> 后期需要移除，通过命令行工具生成 </ElText>
        </p>
        <p>
          <ElText> 一个个的模板存放目录，比如 </ElText>
          <ElText type="warning"> tableTemp </ElText>
          <ElText> 目录中就是一个增删改查的模板，复制到 </ElText>
          <ElText type="warning"> src/views </ElText>
          <ElText> 目录中，可以直接生成一个表格数据的增删改查页面 </ElText>
        </p>
      </div>
      <div>
        <ElDivider />
        <h2 data-id>页面</h2>
        <p>
          <ElText> 存放目录 </ElText>
          <ElText type="warning"> src/views </ElText>
        </p>
        <p>
          <ElText> 每个页面定一个文件夹，文件家中包含基础的三个文件 </ElText>
          <ElText type="warning"> api.ts, server.ts, index.vue </ElText>
        </p>
        <p>
          <ElText type="warning"> index.vue </ElText>
          <ElText> ：是页面入口文件 </ElText>
        </p>
        <p>
          <ElText type="warning"> api.ts </ElText>
          <ElText> ：是存放页面接口的文件 </ElText>
        </p>
        <p>
          <ElText type="warning"> server.ts </ElText>
          <ElText> ：是服务函数或者页面常量存放的文件 </ElText>
        </p>
        <p>
          <ElText> 请尽可能保证，每个文件内容不超过 </ElText>
          <ElText type="warning"> 300 </ElText>
          <ElText> 行代码，便于阅读。 </ElText>
          <ElText> 特别是 </ElText>
          <ElText type="warning"> .vue </ElText>
          <ElText> 文件，过长时请进行拆分，更加符合单一原则 </ElText>
        </p>
      </div>
    </template>
  </UniExample>
</template>
<script setup lang="ts">
import UniExample from '@/components/UniExample'
import uni1 from '@/assets/uni1.png'
import uni2 from '@/assets/uni2.png'
import uni3 from '@/assets/uni3.png'
import uni4 from '@/assets/uni4.png'
import uni5 from '@/assets/uni5.png'
import { ElDivider, ElSpace, ElText } from 'element-plus'
import HighlightCode from '@/components/HighlightCode'
</script>
