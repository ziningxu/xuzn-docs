import{H as d,_ as u}from"./UniExample.vue_vue_type_style_index_0_lang-BxmrS0FW.js";import{_ as f}from"./UniAttrList.vue_vue_type_script_setup_true_lang-r5iNB0bH.js";import{d as m,r as y,o as g,g as x,w as e,f as n,a as l,b as s,e as o,n as S,h as p}from"./index-yT4Q7vfC.js";import"./App-BTwiwmkJ.js";const w=m({__name:"index",setup(T){const r=["UniSelect1"],i=[{attr:"options",desc:"方便的使用数组展示，兼容原生，如果没有options，会读取默认插槽",type:"UniOptionPropsType[]",default:"--"}];return(E,t)=>{const a=y("ElAlert");return g(),x(o(u),{"exp-keys":r},{pre:e(()=>[t[3]||(t[3]=n("h1",null,"UniSelect 多选框",-1)),n("p",null,[l(o(p),null,{default:e(()=>t[0]||(t[0]=[s(" 此表格完全继承自 ")])),_:1}),l(o(p),{type:"warning"},{default:e(()=>t[1]||(t[1]=[s(" ElSelect ")])),_:1}),l(o(p),null,{default:e(()=>t[2]||(t[2]=[s(" 拥有其所有的属性，插槽，事件 ")])),_:1})])]),default:e(()=>[n("div",null,[t[9]||(t[9]=n("h2",{"data-id":""},"UniSelect Api",-1)),l(a,{type:"warning"},{default:e(()=>t[4]||(t[4]=[s("完全继承自ElSelect，相同的属性就不做介绍了")])),_:1}),t[10]||(t[10]=n("h3",{"data-id":"","data-level":"1"},"属性",-1)),l(o(f),{data:i,type:"attr"}),t[11]||(t[11]=n("h3",{"data-id":"","data-level":"1"},"TS 描述",-1)),n("p",null,[l(o(p),null,{default:e(()=>t[5]||(t[5]=[s(" 可能会有差异，请直接在编辑器中查看你的版本对应的 ")])),_:1}),l(o(p),{type:"warning"},{default:e(()=>t[6]||(t[6]=[s(" TS ")])),_:1}),l(o(p),null,{default:e(()=>t[7]||(t[7]=[s(" 描述 ")])),_:1})]),l(o(d),null,{default:e(()=>t[8]||(t[8]=[n("pre",null,[n("code",{class:S("line-numbers language-ts")},`
// options 属性配置 继承ElOption
export interface UniOptionPropsType extends /* @vue-ignore */ ElOptionPropsType {
    slots?: Record<string, () => VNodeChild>;
}
// 新增了 options 属性 其他 继承自ElSelect
export interface UniSelectPropsType extends /* @vue-ignore */ ElSelectPropsType {
    options?: UniOptionPropsType[];
}
        `)],-1)])),_:1})])]),_:1})}}});export{w as default};
