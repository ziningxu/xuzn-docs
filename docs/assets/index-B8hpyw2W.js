import{H as u,_ as d}from"./UniExample.vue_vue_type_style_index_0_lang-CGFIJGpZ.js";import{_ as x}from"./UniAttrList.vue_vue_type_script_setup_true_lang-6srR3vgS.js";import{d as f,r as C,o as k,f as m,w as o,g as t,a as n,b as r,e as l,n as b,h as s}from"./index-D07_PQ_t.js";import"./App-BTwiwmkJ.js";const v=f({__name:"index",setup(y){const p=["UniCheckboxGroup1"],a=[{attr:"options",desc:"方便的使用数组展示，兼容原生，如果没有options，会读取默认插槽",type:"UniCheckboxPropsType[]",default:"--"}];return(g,e)=>{const i=C("ElAlert");return k(),m(l(d),{"exp-keys":p},{pre:o(()=>[e[3]||(e[3]=t("h1",null,"UniCheckboxGroup 多选框",-1)),t("p",null,[n(l(s),null,{default:o(()=>e[0]||(e[0]=[r(" 此表格完全继承自 ")])),_:1}),n(l(s),{type:"warning"},{default:o(()=>e[1]||(e[1]=[r(" ElCheckboxGroup ")])),_:1}),n(l(s),null,{default:o(()=>e[2]||(e[2]=[r(" 拥有其所有的属性，插槽，事件 ")])),_:1})])]),default:o(()=>[t("div",null,[e[9]||(e[9]=t("h2",{"data-id":""},"UniCheckboxGroup Api",-1)),n(i,{type:"warning"},{default:o(()=>e[4]||(e[4]=[r("完全继承自ElCheckboxGroup，相同的属性就不做介绍了")])),_:1}),e[10]||(e[10]=t("h3",{"data-id":"","data-level":"1"},"属性",-1)),n(l(x),{data:a,type:"attr"}),e[11]||(e[11]=t("h3",{"data-id":"","data-level":"1"},"TS 描述",-1)),t("p",null,[n(l(s),null,{default:o(()=>e[5]||(e[5]=[r(" 可能会有差异，请直接在编辑器中查看你的版本对应的 ")])),_:1}),n(l(s),{type:"warning"},{default:o(()=>e[6]||(e[6]=[r(" TS ")])),_:1}),n(l(s),null,{default:o(()=>e[7]||(e[7]=[r(" 描述 ")])),_:1})]),n(l(u),null,{default:o(()=>e[8]||(e[8]=[t("pre",null,[t("code",{class:b("line-numbers language-ts")},`
// options 属性配置 继承ElCheckbox
export interface UniCheckboxPropsType extends /* @vue-ignore */ ElCheckboxPropsType {
    slots?: Record<string, () => VNodeChild>;
}
// 新增了 options 属性 其他 继承自ElCheckboxGroup
export interface UniCheckboxGroupPropsType extends /* @vue-ignore */ ElCheckboxGroupPropsType {
    options?: UniCheckboxPropsType[];
}
        `)],-1)])),_:1})])]),_:1})}}});export{v as default};
