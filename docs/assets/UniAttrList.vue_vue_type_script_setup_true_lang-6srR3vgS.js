import{d as s,G as r,j as o,o as p,f as i,e as a,Z as c}from"./index-D07_PQ_t.js";const b=s({__name:"UniAttrList",props:{type:{},data:{}},setup(l){const e=l,t=r({async api(){return{total:1,rows:e.data||[]}}});t.onCurrentChange(1);const n=o(()=>e.type==="slot"?[{key:"attr",label:"插槽名",width:140},{key:"desc",label:"说明"}]:e.type==="exposes"?[{key:"attr",label:"方法名",width:140},{key:"desc",label:"说明"},{key:"type",label:"Type",width:140}]:[{key:"attr",label:"属性名",width:140},{key:"desc",label:"说明"},{key:"type",label:"Type",width:140},{key:"default",label:"Default"}]);return(d,u)=>(p(),i(a(c),{"table-api":a(t),columns:n.value,"hidden-bar":"","hidden-pagination":""},null,8,["table-api","columns"]))}});export{b as _};
