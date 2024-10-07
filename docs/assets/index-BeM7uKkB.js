import{_ as d}from"./UniAttrList.vue_vue_type_script_setup_true_lang-BoK7C5OY.js";import{H as f,_ as m}from"./UniExample.vue_vue_type_style_index_0_lang-D-FTNCQz.js";import{d as g,r as E,o as C,g as U,w as l,f as a,a as t,b as r,e as n,n as k,h as s}from"./index-CFvlcqMZ.js";import"./App-BTwiwmkJ.js";const D=g({__name:"index",setup(x){const i=["UniTable/"],p=[{attr:"tableApi",desc:"表格的数据配置，由 useTable 函数返回",type:"Object",default:"--"},{attr:"columns",desc:"继承自 ElTableItem 的所有属性，同时进行扩展",type:"Object",default:"--"},{attr:"paginationAttrs",desc:"透传给 ElPagination 组件的属性",type:"Object",default:"--"},{attr:"cacheKey",desc:"缓存的唯一值，全局唯一",type:"String",default:"--"},{attr:"hiddenBar",desc:"是否隐藏 table bar",type:"Boolean",default:"--"},{attr:"hiddenPagination",desc:"是否隐藏翻页",type:"Boolean",default:"--"},{attr:"formatBarItems",desc:"格式化 table bar 内容",type:"Function",default:"--"},{attr:"tableRef",desc:"获取 ElTable 的实例，建议直接使用当前实例的 tableRef 属性 ",type:"Function",default:"--"},{attr:"on-bar-click",desc:"table bar 元素的点击事件回调",type:"Function",default:"--"}],b=[{attr:"filter_form",desc:"搜索表单存放，如果有值对应tableBar中会显示搜索图标，控制其显示隐藏"},{attr:"对应{key}",desc:"columns配置的key会对应 ElTableItem 组件的 default 的插槽"},{attr:"对应{key}_{slotName}",desc:"比如 key_header，可以对应 ElTableItem 组件的 header 插槽"}],T=[{attr:"tableRef",desc:"返回 ElTable 的实例",type:"Object"},{attr:"getSelectionRows",desc:"返回 ElTable 的选中行",type:"Array"},{attr:"tableExpose",desc:"函数的参数是 ElTable 实例的 key，也就是说，通过这个，可以访问所有 ElTable 实例数据",type:"Function"}],u=[{attr:"key",desc:"配置唯一值，必填，可以对应插槽",type:"string",default:"--"},{attr:"hidden",desc:"是否隐藏，初始隐藏，用户可以在设置中取消隐藏",type:"string",default:"--"},{attr:"subset",desc:"子集配置",type:"UniTableColumnPropsType[]",default:"--"},{attr:"slots",desc:"ElTableItem 的插槽",type:"Object",default:"--"}],y=[{attr:"key",desc:"配置唯一值，必填，可以对应插槽",type:"string",default:"--"},{attr:"position",desc:"左边还是右边",type:"'left' | 'right'",default:"--"},{attr:"render",desc:"自定义渲染你函数",type:"() => VNodeChild",default:"--"}];return(I,e)=>{const o=E("ElAlert");return C(),U(n(m),{"exp-keys":i},{pre:l(()=>[e[3]||(e[3]=a("h1",null,"UniTable 表格",-1)),a("p",null,[t(n(s),null,{default:l(()=>e[0]||(e[0]=[r(" 此表格完全继承自 ")])),_:1}),t(n(s),{type:"warning"},{default:l(()=>e[1]||(e[1]=[r(" ElTable ")])),_:1}),t(n(s),null,{default:l(()=>e[2]||(e[2]=[r(" 拥有其所有的属性，插槽，事件 ")])),_:1})])]),default:l(()=>[a("div",null,[e[10]||(e[10]=a("h2",{"data-id":""},"UniTable Api",-1)),t(o,{type:"warning"},{default:l(()=>e[4]||(e[4]=[r("完全继承自ElTable，ElTable相同的属性就不做介绍了")])),_:1}),e[11]||(e[11]=a("h3",{"data-id":"","data-level":"1"},"属性",-1)),t(n(d),{data:p,type:"attr"}),e[12]||(e[12]=a("h3",{"data-id":"","data-level":"1"},"插槽",-1)),t(n(d),{data:b,type:"slot"}),e[13]||(e[13]=a("h3",{"data-id":"","data-level":"1"},"实例",-1)),t(n(d),{data:T,type:"exposes"}),e[14]||(e[14]=a("h3",{"data-id":"","data-level":"1"},"Column 配置",-1)),t(o,{type:"warning"},{default:l(()=>e[5]||(e[5]=[r("完全继承自ElTableItem，ElTableItem相同的属性就不做介绍了")])),_:1}),t(n(d),{data:u,type:"attr"}),e[15]||(e[15]=a("h3",{"data-id":"","data-level":"1"},"table bar 配置",-1)),t(n(d),{data:y,type:"attr"}),e[16]||(e[16]=a("h3",{"data-id":"","data-level":"1"},"TS 描述",-1)),a("p",null,[t(n(s),null,{default:l(()=>e[6]||(e[6]=[r(" 可能会有差异，请直接在编辑器中查看你的版本对应的 ")])),_:1}),t(n(s),{type:"warning"},{default:l(()=>e[7]||(e[7]=[r(" TS ")])),_:1}),t(n(s),null,{default:l(()=>e[8]||(e[8]=[r(" 描述 ")])),_:1})]),t(n(f),null,{default:l(()=>e[9]||(e[9]=[a("pre",null,[a("code",{class:k("line-numbers language-ts")},`
// table bar的元素配置
export interface UniTableBarItemType {
  key: string | number
  position?: 'left' | 'right'
  render?: (item: UniTableBarItemType) => VNodeChild
}

// table的列数据配置，同时继承ElTableColumn
export interface UniTableColumnPropsType extends /* @vue-ignore */ ElTableColumnPropsType {
  key: string | number
  slots?: Record<string, ((...args: any[]) => VNodeChild) | undefined>
  component?: (...args: any[]) => VNodeChild
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
  formatBarItems?: (items: UniTableBarItemType[]) => UniTableBarItemType[]
  tableRef?: (val: any) => void
  onBarClick?: (item: UniTableBarItemType) => void
}

// tableApi 类型描述
interface UseTableReturnType {
  // 响应式数据
  tableData: UseTableDataType<T>
  // 条用查询
  onSearch: () => Promise<UseTableDataType<T>>
  // 跳转到指定页码
  onCurrentChange: (val: number) => Promise<UseTableDataType<T>>
  // 切换每页展示的条目数量
  onSizeChange: (val: number) => Promise<UseTableDataType<T>>
  // 数据重置
  reset: () => void
}
// Table 实例
export interface UniTableInstance {
  getSelectionRows: () => any
  tableExpose: <T extends keyof TableInstance>(key: T) => TableInstance[T]
  tableRef: TableInstance
  $el: any
}
        `)],-1)])),_:1})])]),_:1})}}});export{D as default};
