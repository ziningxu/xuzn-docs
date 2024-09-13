<template>
  <UniExample :exp-keys="ks">
    <template #pre>
      <h1>UniSelect 多选框</h1>
      <p>
        <ElText> 此表格完全继承自 </ElText>
        <ElText type="warning"> ElSelect </ElText>
        <ElText> 拥有其所有的属性，插槽，事件 </ElText>
      </p>
    </template>
    <div>
      <h2 data-id>UniSelect Api</h2>
      <ElAlert type="warning">完全继承自ElSelect，相同的属性就不做介绍了</ElAlert>
      <h3 data-id data-level="1">属性</h3>
      <UniAttrList :data="attrData" type="attr" />
      <h3 data-id data-level="1">TS 描述</h3>
      <p>
        <ElText> 可能会有差异，请直接在编辑器中查看你的版本对应的 </ElText>
        <ElText type="warning"> TS </ElText>
        <ElText> 描述 </ElText>
      </p>
      <HighlightCode>
        <pre><code :class="`line-numbers language-ts`">
// options 属性配置 继承ElOption
export interface UniOptionPropsType extends /* @vue-ignore */ ElOptionPropsType {
    slots?: Record&lt;string, () =&gt; VNodeChild&gt;;
}
// 新增了 options 属性 其他 继承自ElSelect
export interface UniSelectPropsType extends /* @vue-ignore */ ElSelectPropsType {
    options?: UniOptionPropsType[];
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
const ks = ['UniSelect1']

const attrData: AttrListItemType[] = [
  { attr: 'options', desc: '方便的使用数组展示，兼容原生，如果没有options，会读取默认插槽', type: 'UniOptionPropsType[]', default: '--' },
]
</script>
