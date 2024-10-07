import{H as d,_ as u}from"./UniExample.vue_vue_type_style_index_0_lang-BxmrS0FW.js";import{_ as f}from"./UniAttrList.vue_vue_type_script_setup_true_lang-r5iNB0bH.js";import{d as m,r as R,o as x,g as y,w as t,f as n,a as e,b as r,e as l,n as g,h as a}from"./index-yT4Q7vfC.js";import"./App-BTwiwmkJ.js";const P=m({__name:"index",setup(T){const i=["UniRadioGroup1"],s=[{attr:"options",desc:"方便的使用数组展示，兼容原生，如果没有options，会读取默认插槽",type:"UniRadioPropsType[]",default:"--"}];return(E,o)=>{const p=R("ElAlert");return x(),y(l(u),{"exp-keys":i},{pre:t(()=>[o[3]||(o[3]=n("h1",null,"UniRadioGroup 多选框",-1)),n("p",null,[e(l(a),null,{default:t(()=>o[0]||(o[0]=[r(" 此表格完全继承自 ")])),_:1}),e(l(a),{type:"warning"},{default:t(()=>o[1]||(o[1]=[r(" ElRadioGroup ")])),_:1}),e(l(a),null,{default:t(()=>o[2]||(o[2]=[r(" 拥有其所有的属性，插槽，事件 ")])),_:1})])]),default:t(()=>[n("div",null,[o[9]||(o[9]=n("h2",{"data-id":""},"UniRadioGroup Api",-1)),e(p,{type:"warning"},{default:t(()=>o[4]||(o[4]=[r("完全继承自ElRadioGroup，相同的属性就不做介绍了")])),_:1}),o[10]||(o[10]=n("h3",{"data-id":"","data-level":"1"},"属性",-1)),e(l(f),{data:s,type:"attr"}),o[11]||(o[11]=n("h3",{"data-id":"","data-level":"1"},"TS 描述",-1)),n("p",null,[e(l(a),null,{default:t(()=>o[5]||(o[5]=[r(" 可能会有差异，请直接在编辑器中查看你的版本对应的 ")])),_:1}),e(l(a),{type:"warning"},{default:t(()=>o[6]||(o[6]=[r(" TS ")])),_:1}),e(l(a),null,{default:t(()=>o[7]||(o[7]=[r(" 描述 ")])),_:1})]),e(l(d),null,{default:t(()=>o[8]||(o[8]=[n("pre",null,[n("code",{class:g("line-numbers language-ts")},`
// options 属性配置 继承ElCheckbox
export interface UniRadioPropsType extends /* @vue-ignore */ ElRadioPropsType {
    slots?: Record<string, () => VNodeChild>;
}
// 新增了 options 属性 其他 继承自ElRadioGroup
export interface UniRadioGroupPropsType extends /* @vue-ignore */ ElRadioGroupPropsType {
    options?: UniRadioPropsType[];
}
        `)],-1)])),_:1})])]),_:1})}}});export{P as default};
