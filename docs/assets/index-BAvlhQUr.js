import{H as u,_ as F}from"./UniExample.vue_vue_type_style_index_0_lang-D-FTNCQz.js";import{_ as s}from"./UniAttrList.vue_vue_type_script_setup_true_lang-BoK7C5OY.js";import{d as E,r as g,o as v,g as I,w as r,f as n,a as e,b as a,e as o,n as x,h as l}from"./index-CFvlcqMZ.js";import"./App-BTwiwmkJ.js";const S=E({__name:"index",setup(b){const i=["UniForm/"],m=[{attr:"items",desc:"表单元素配置，UniFormItemPropsType 继承自 ElFormItem",type:"UniFormItemPropsType[]",default:"--"},{attr:"formStyle",desc:"透传到表单的样式",type:"CSSProperties",default:"--"},{attr:"itemMinWidth",desc:"元素最小宽度，如果给1fr，会占整行，使用的是 grid 布局",type:"string",default:"--"},{attr:"formRef",desc:"获取 ElForm 实例的方法",type:"(val: any) => void",default:"--"},{attr:"on-submit",desc:"如果有 btns 那就是提交的点击事件",type:"Function",default:"--"},{attr:"on-reset",desc:"如果有 btns 那就是重置的点击事件",type:"Function",default:"--"}],p=[{attr:"items 中对应{key}",desc:"key会对应 ElFormItem 组件的 default 的插槽"},{attr:"items 中对应{key}_{slotName}",desc:"比如 key_label，可以对应 ElFormItem 组件的 label 插槽"}],f=[{attr:"formRef",desc:"返回 ElForm 的实例",type:"Object"},{attr:"formExpose",desc:"函数的参数是 ElForm 实例的 key，也就是说，通过这个，可以访问所有 ElForm 实例数据",type:"Function"},{attr:"switchHidden",desc:"item 元素中如果有 hidden 属性，可以切换此属性",type:"Function"},{attr:"validate",desc:"表单验证，就是 ElForm 实例的表单验证方法",type:"Function"},{attr:"resetFormModel",desc:"表单重置的方法",type:"Function"}],y=[{attr:"key",desc:"配置的唯一值，如果没有 prop 会作为 prop 使用，必填",type:"string"},{attr:"hidden",desc:"是否需要元素默认隐藏，如果存在此属性，btns 会多出一个切换按键",type:"boolean"},{attr:"slots",desc:"ElFormItem 的插槽对象集合",type:"Object"},{attr:"component",desc:"ElFormItem 的 default 插槽，快捷方式，优先级低于 slots.default",type:"Function"}];return(T,t)=>{const d=g("ElAlert");return v(),I(o(F),{"exp-keys":i},{pre:r(()=>[t[3]||(t[3]=n("h1",null,"UniForm 表单",-1)),n("p",null,[e(o(l),null,{default:r(()=>t[0]||(t[0]=[a(" 此表格完全继承自 ")])),_:1}),e(o(l),{type:"warning"},{default:r(()=>t[1]||(t[1]=[a(" ElForm ")])),_:1}),e(o(l),null,{default:r(()=>t[2]||(t[2]=[a(" 拥有其所有的属性，插槽，事件 ")])),_:1})])]),default:r(()=>[n("div",null,[t[10]||(t[10]=n("h2",{"data-id":""},"UniForm Api",-1)),e(d,{type:"warning"},{default:r(()=>t[4]||(t[4]=[a("完全继承自ElForm，ElForm相同的属性就不做介绍了")])),_:1}),t[11]||(t[11]=n("h3",{"data-id":"","data-level":"1"},"属性",-1)),e(o(s),{data:m,type:"attr"}),t[12]||(t[12]=n("h3",{"data-id":"","data-level":"1"},"插槽",-1)),e(o(s),{data:p,type:"slot"}),t[13]||(t[13]=n("h3",{"data-id":"","data-level":"1"},"实例",-1)),e(o(s),{data:f,type:"exposes"}),t[14]||(t[14]=n("h3",{"data-id":"","data-level":"1"},"item 配置",-1)),e(d,{type:"warning"},{default:r(()=>t[5]||(t[5]=[a("完全继承自ElFormItem，ElFormItem相同的属性就不做介绍了")])),_:1}),e(o(s),{data:y,type:"attr"}),t[15]||(t[15]=n("h3",{"data-id":"","data-level":"1"},"TS 描述",-1)),n("p",null,[e(o(l),null,{default:r(()=>t[6]||(t[6]=[a(" 可能会有差异，请直接在编辑器中查看你的版本对应的 ")])),_:1}),e(o(l),{type:"warning"},{default:r(()=>t[7]||(t[7]=[a(" TS ")])),_:1}),e(o(l),null,{default:r(()=>t[8]||(t[8]=[a(" 描述 ")])),_:1})]),e(o(u),null,{default:r(()=>t[9]||(t[9]=[n("pre",null,[n("code",{class:x("line-numbers language-ts")},`
// form item 配置项 继承ElFormItem
export interface UniFormItemPropsType extends /* @vue-ignore */ ElFormItemPropsType {
  key: string
  hidden?: boolean | Ref<boolean>
  slots?: Record<string, ((...args: any[]) => VNodeChild) | undefined>
  component?: (...args: any[]) => VNodeChild
  [str: string]: any
}

// form 的参数 继承ElForm
export interface UniFormPropsType extends /* @vue-ignore */ ElFormPropsType {
  items?: UniFormItemPropsType[]
  formStyle?: CSSProperties
  itemMinWidth?: string
  formRef?: (val: any) => void
  onSubmit?: (model: Record<string, any>) => void
  onReset?: (model: Record<string, any>) => void
}

// form 实例
export interface UniFormInstance {
  switchHidden: (val?: boolean) => void
  validate: FormInstance['validate']
  resetFormModel: () => void
  formExpose: <T extends keyof FormInstance>(key: T) => FormInstance[T]
  formRef: FormInstance
  $el: HTMLElement
}
        `)],-1)])),_:1})])]),_:1})}}});export{S as default};
