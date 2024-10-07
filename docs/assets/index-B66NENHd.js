import{H as i,_ as d}from"./UniExample.vue_vue_type_style_index_0_lang-BxmrS0FW.js";import{_ as o}from"./UniAttrList.vue_vue_type_script_setup_true_lang-r5iNB0bH.js";import{d as b,o as y,g as f,w as t,f as a,a as l,b as r,e as n,n as g,h as s}from"./index-yT4Q7vfC.js";import"./App-BTwiwmkJ.js";const S=b({__name:"index",setup(m){const p=["useTable1"],u=[{attr:"api",desc:"请求接口，拿服务器数据，返回值 限制 UseTableApiResType",type:'UseTableConfigType["api"]',default:"--"},{attr:"tableData",desc:"初始化参数，比如每页展示的数据量，",type:'UseTableConfigType["tableData"]',default:"--"},{attr:"isMarkRaw",desc:"是否禁用递归响应",type:"boolean",default:"true"},{attr:"localPaging",desc:"是否启用本地翻页，后端一次性返回了数据，前端自行处理翻页",type:"boolean",default:"false"},{attr:"syncServer",desc:"localPaging === true时有效，是否每次都调用请求接口，否则只会首次请求",type:"boolean",default:"true"}],T=[{attr:"tableData",desc:"响应式数据，存放了交互数据",type:'UseTableReturnType["tableData"]',default:"--"},{attr:"onSearch",desc:"查询函数，",type:'UseTableReturnType["onSearch"]',default:"--"},{attr:"onCurrentChange",desc:"翻页函数",type:'UseTableReturnType["onCurrentChange"]',default:"--"},{attr:"onSizeChange",desc:"切换每页展示数量",type:'UseTableReturnType["onSizeChange"]',default:"--"},{attr:"reset",desc:"重置响应式数据到初始状态",type:'UseTableReturnType["reset"]',default:"--"}];return(U,e)=>(y(),f(n(d),{"exp-keys":p},{pre:t(()=>[e[3]||(e[3]=a("h1",null,"useTable 封装了和服务器翻页交互的 hook",-1)),a("p",null,[l(n(s),null,{default:t(()=>e[0]||(e[0]=[r(" 不仅仅可以提供给 ")])),_:1}),l(n(s),{type:"warning"},{default:t(()=>e[1]||(e[1]=[r(" UniTable ")])),_:1}),l(n(s),null,{default:t(()=>e[2]||(e[2]=[r(" 使用的，是完全可以配合大多翻页交互组件的 ")])),_:1})])]),default:t(()=>[a("div",null,[e[8]||(e[8]=a("h2",{"data-id":""},"useTable Api",-1)),e[9]||(e[9]=a("h3",{"data-id":"","data-level":"1"},"配置属性",-1)),l(n(o),{data:u,type:"attr"}),e[10]||(e[10]=a("h3",{"data-id":"","data-level":"1"},"返回属性",-1)),l(n(o),{data:T,type:"attr"}),e[11]||(e[11]=a("h3",{"data-id":"","data-level":"1"},"TS 描述",-1)),a("p",null,[l(n(s),null,{default:t(()=>e[4]||(e[4]=[r(" 可能会有差异，请直接在编辑器中查看你的版本对应的 ")])),_:1}),l(n(s),{type:"warning"},{default:t(()=>e[5]||(e[5]=[r(" TS ")])),_:1}),l(n(s),null,{default:t(()=>e[6]||(e[6]=[r(" 描述 ")])),_:1})]),l(n(i),null,{default:t(()=>e[7]||(e[7]=[a("pre",null,[a("code",{class:g("line-numbers language-ts")},`
// 配置参数 api 异步函数的返回值
export interface UseTableApiResType<T> {
  // 行数据
  rows: T[]
  // 总共条数
  total: number
}

// 配置参数
export interface UseTableConfigType<T = any> {
  // 线上请求api
  api: (tableData: UseTableDataType) => Promise<UseTableApiResType<T>>
  // 响应式变量数据，用于初始化配置
  tableData?: Partial<UseTableDataType>
  // 对返回的条目数据，是否禁用递归响应，默认true，不需要递归响应
  // 减少性能消耗，特别是大数据量时
  isMarkRaw?: boolean
  // 本地翻页方式，默认false
  localPaging?: boolean
  // 配合本地翻页，每次翻页时要不要调用接口，默认true
  syncServer?: boolean
}

// 定义了对应的响应式变量，返回值中可以访问
export interface UseTableDataType<T = any> {
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
export type UseTableReturnType = ReturnType<typeof useTable>

// useTable 函数类型声明
export declare function useTable<T = any>(
  config: UseTableConfigType<T>,
): {
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
        `)],-1)])),_:1})])]),_:1}))}});export{S as default};
