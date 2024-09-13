<template>
  <UniExample :exp-keys="ks">
    <template #pre>
      <h1>useTable 封装了和服务器翻页交互的 hook</h1>
      <p>
        <ElText> 不仅仅可以提供给 </ElText>
        <ElText type="warning"> UniTable </ElText>
        <ElText> 使用的，是完全可以配合大多翻页交互组件的 </ElText>
      </p>
    </template>
    <div>
      <h2 data-id>useTable Api</h2>
      <h3 data-id data-level="1">配置属性</h3>
      <UniAttrList :data="attrData" type="attr" />
      <h3 data-id data-level="1">返回属性</h3>
      <UniAttrList :data="returnData" type="attr" />
      <h3 data-id data-level="1">TS 描述</h3>
      <p>
        <ElText> 可能会有差异，请直接在编辑器中查看你的版本对应的 </ElText>
        <ElText type="warning"> TS </ElText>
        <ElText> 描述 </ElText>
      </p>
      <HighlightCode>
        <pre><code :class="`line-numbers language-ts`">
// 配置参数 api 异步函数的返回值
export interface UseTableApiResType&lt;T&gt; {
  // 行数据
  rows: T[]
  // 总共条数
  total: number
}

// 配置参数
export interface UseTableConfigType&lt;T = any&gt; {
  // 线上请求api
  api: (tableData: UseTableDataType) =&gt; Promise&lt;UseTableApiResType&lt;T&gt;&gt;
  // 响应式变量数据，用于初始化配置
  tableData?: Partial&lt;UseTableDataType&gt;
  // 对返回的条目数据，是否禁用递归响应，默认true，不需要递归响应
  // 减少性能消耗，特别是大数据量时
  isMarkRaw?: boolean
  // 本地翻页方式，默认false
  localPaging?: boolean
  // 配合本地翻页，每次翻页时要不要调用接口，默认true
  syncServer?: boolean
}

// 定义了对应的响应式变量，返回值中可以访问
export interface UseTableDataType&lt;T = any&gt; {
  // 总条目数量
  total: number
  // 当前页码
  current: number
  // 当前展示的数据
  rows: T[]
  // 每页展示数量
  size: number
  // 加载中
  loading: boolean
}

// 独立声明返回值，方便使用
export type UseTableReturnType = ReturnType&lt;typeof useTable&gt;

// useTable 函数类型声明
export declare function useTable&lt;T = any&gt;(
  config: UseTableConfigType&lt;T&gt;,
): {
  // 响应式数据
  tableData: UseTableDataType&lt;T&gt;
  // 条用查询
  onSearch: () =&gt; Promise&lt;UseTableDataType&lt;T&gt;&gt;
  // 跳转到指定页码
  onCurrentChange: (val: number) =&gt; Promise&lt;UseTableDataType&lt;T&gt;&gt;
  // 切换每页展示的条目数量
  onSizeChange: (val: number) =&gt; Promise&lt;UseTableDataType&lt;T&gt;&gt;
  // 数据重置
  reset: () =&gt; void
}
        </code></pre>
      </HighlightCode>
    </div>
  </UniExample>
</template>
<script setup lang="ts">
import HighlightCode from '@/components/HighlightCode'
import UniAttrList, { AttrListItemType } from '@/components/UniAttrList'
import UniExample from '@/components/UniExample'
import { ElText } from 'element-plus'
const ks = ['useTable1']
const attrData: AttrListItemType[] = [
  { attr: 'api', desc: '请求接口，拿服务器数据，返回值 限制 UseTableApiResType', type: 'UseTableConfigType["api"]', default: '--' },
  { attr: 'tableData', desc: '初始化参数，比如每页展示的数据量，', type: 'UseTableConfigType["tableData"]', default: '--' },
  { attr: 'isMarkRaw', desc: '是否禁用递归响应', type: 'boolean', default: 'true' },
  { attr: 'localPaging', desc: '是否启用本地翻页，后端一次性返回了数据，前端自行处理翻页', type: 'boolean', default: 'false' },
  { attr: 'syncServer', desc: 'localPaging === true时有效，是否每次都调用请求接口，否则只会首次请求', type: 'boolean', default: 'true' },
]
const returnData: AttrListItemType[] = [
  { attr: 'tableData', desc: '响应式数据，存放了交互数据', type: 'UseTableReturnType["tableData"]', default: '--' },
  { attr: 'onSearch', desc: '查询函数，', type: 'UseTableReturnType["onSearch"]', default: '--' },
  { attr: 'onCurrentChange', desc: '翻页函数', type: 'UseTableReturnType["onCurrentChange"]', default: '--' },
  { attr: 'onSizeChange', desc: '切换每页展示数量', type: 'UseTableReturnType["onSizeChange"]', default: '--' },
  { attr: 'reset', desc: '重置响应式数据到初始状态', type: 'UseTableReturnType["reset"]', default: '--' },
]
</script>
