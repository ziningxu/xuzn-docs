<template>
  <UniExample :exp-keys="ks">
    <template #pre>
      <h1>UniTable 表格</h1>
      <p>
        <ElText> 此表格完全继承自 </ElText>
        <ElText type="warning"> ElTable </ElText>
        <ElText> 拥有其所有的属性，插槽，事件 </ElText>
      </p>
    </template>
    <div>
      <h2 data-id>UniTable Api</h2>
      <ElAlert type="warning">完全继承自ElTable，ElTable相同的属性就不做介绍了</ElAlert>
      <h3 data-id data-level="1">属性</h3>
      <UniAttrList :data="attrData" type="attr" />
      <h3 data-id data-level="1">插槽</h3>
      <UniAttrList :data="slotData" type="slot" />
      <h3 data-id data-level="1">实例</h3>
      <UniAttrList :data="instanData" type="exposes" />
      <h3 data-id data-level="1">Column 配置</h3>
      <ElAlert type="warning">完全继承自ElTableItem，ElTableItem相同的属性就不做介绍了</ElAlert>
      <UniAttrList :data="columnData" type="attr" />
      <h3 data-id data-level="1">table bar 配置</h3>
      <UniAttrList :data="barData" type="attr" />
      <h3 data-id data-level="1">TS 描述</h3>
      <p>
        <ElText> 可能会有差异，请直接在编辑器中查看你的版本对应的 </ElText>
        <ElText type="warning"> TS </ElText>
        <ElText> 描述 </ElText>
      </p>
      <HighlightCode>
        <pre><code :class="`line-numbers language-ts`">
// table bar的元素配置
export interface UniTableBarItemType {
  key: string | number
  position?: 'left' | 'right'
  render?: (item: UniTableBarItemType) =&gt; VNodeChild
}

// table的列数据配置，同时继承ElTableColumn
export interface UniTableColumnPropsType extends /* @vue-ignore */ ElTableColumnPropsType {
  key: string | number
  slots?: Record&lt;string, ((...args: any[]) =&gt; VNodeChild) | undefined&gt;
  component?: (...args: any[]) =&gt; VNodeChild
  subset?: UniTableColumnPropsType[]
  hidden?: boolean
  [str: string]: any
}

// table的参数，同时继承ElTable
export interface UniTablePropsType extends /* @vue-ignore */ ElTablePropsType {
  // 参考 useTable 的返回值
  tableApi: UseTableReturnType
  columns?: UniTableColumnPropsType[]
  paginationAttrs?: ElPaginationPropsType
  cacheKey?: string
  hiddenBar?: boolean
  hiddenPagination?: boolean
  formatBarItems?: (items: UniTableBarItemType[]) =&gt; UniTableBarItemType[]
  tableRef?: (val: any) =&gt; void
  onBarClick?: (item: UniTableBarItemType) =&gt; void
}

// tableApi 类型描述
interface UseTableReturnType {
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
// Table 实例
export interface UniTableInstance {
  getSelectionRows: () =&gt; any
  tableExpose: &lt;T extends keyof TableInstance&gt;(key: T) =&gt; TableInstance[T]
  tableRef: TableInstance
  $el: any
}
        </code></pre>
      </HighlightCode>
    </div>
  </UniExample>
</template>
<script setup lang="ts">
import UniAttrList, { AttrListItemType } from '@/components/UniAttrList'
import HighlightCode from '@/components/HighlightCode'
import UniExample from '@/components/UniExample'
import { ElText } from 'element-plus'
const ks = ['UniTable/']
const attrData: AttrListItemType[] = [
  { attr: 'tableApi', desc: '表格的数据配置，由 useTable 函数返回', type: 'Object', default: '--' },
  { attr: 'columns', desc: '继承自 ElTableItem 的所有属性，同时进行扩展', type: 'Object', default: '--' },
  { attr: 'paginationAttrs', desc: '透传给 ElPagination 组件的属性', type: 'Object', default: '--' },
  { attr: 'cacheKey', desc: '缓存的唯一值，全局唯一', type: 'String', default: '--' },
  { attr: 'hiddenBar', desc: '是否隐藏 table bar', type: 'Boolean', default: '--' },
  { attr: 'hiddenPagination', desc: '是否隐藏翻页', type: 'Boolean', default: '--' },
  { attr: 'formatBarItems', desc: '格式化 table bar 内容', type: 'Function', default: '--' },
  { attr: 'tableRef', desc: '获取 ElTable 的实例，建议直接使用当前实例的 tableRef 属性 ', type: 'Function', default: '--' },
  { attr: 'on-bar-click', desc: 'table bar 元素的点击事件回调', type: 'Function', default: '--' },
]
const slotData: AttrListItemType[] = [
  { attr: 'filter_form', desc: '搜索表单存放，如果有值对应tableBar中会显示搜索图标，控制其显示隐藏' },
  { attr: '对应{key}', desc: 'columns配置的key会对应 ElTableItem 组件的 default 的插槽' },
  { attr: '对应{key}_{slotName}', desc: '比如 key_header，可以对应 ElTableItem 组件的 header 插槽' },
]
const instanData: AttrListItemType[] = [
  { attr: 'tableRef', desc: '返回 ElTable 的实例', type: 'Object' },
  { attr: 'getSelectionRows', desc: '返回 ElTable 的选中行', type: 'Array' },
  { attr: 'tableExpose', desc: '函数的参数是 ElTable 实例的 key，也就是说，通过这个，可以访问所有 ElTable 实例数据', type: 'Function' },
]
const columnData: AttrListItemType[] = [
  { attr: 'key', desc: '配置唯一值，必填，可以对应插槽', type: 'string', default: '--' },
  { attr: 'hidden', desc: '是否隐藏，初始隐藏，用户可以在设置中取消隐藏', type: 'string', default: '--' },
  { attr: 'subset', desc: '子集配置', type: 'UniTableColumnPropsType[]', default: '--' },
  { attr: 'slots', desc: 'ElTableItem 的插槽', type: 'Object', default: '--' },
]

const barData: AttrListItemType[] = [
  { attr: 'key', desc: '配置唯一值，必填，可以对应插槽', type: 'string', default: '--' },
  { attr: 'position', desc: '左边还是右边', type: "'left' | 'right'", default: '--' },
  { attr: 'render', desc: '自定义渲染你函数', type: '() => VNodeChild', default: '--' },
]
</script>
