<template>
  <UniExample :exp-keys="ks">
    <template #pre>
      <h1>UniForm 表单</h1>
      <p>
        <ElText> 此表格完全继承自 </ElText>
        <ElText type="warning"> ElForm </ElText>
        <ElText> 拥有其所有的属性，插槽，事件 </ElText>
      </p>
    </template>
    <div>
      <h2 data-id>UniForm Api</h2>
      <ElAlert type="warning">完全继承自ElForm，ElForm相同的属性就不做介绍了</ElAlert>
      <h3 data-id data-level="1">属性</h3>
      <UniAttrList :data="attrData" type="attr" />
      <h3 data-id data-level="1">插槽</h3>
      <UniAttrList :data="slotData" type="slot" />
      <h3 data-id data-level="1">实例</h3>
      <UniAttrList :data="instanData" type="exposes" />
      <h3 data-id data-level="1">item 配置</h3>
      <ElAlert type="warning">完全继承自ElFormItem，ElFormItem相同的属性就不做介绍了</ElAlert>
      <UniAttrList :data="itemData" type="attr" />
      <h3 data-id data-level="1">TS 描述</h3>
      <p>
        <ElText> 可能会有差异，请直接在编辑器中查看你的版本对应的 </ElText>
        <ElText type="warning"> TS </ElText>
        <ElText> 描述 </ElText>
      </p>
      <HighlightCode>
        <pre><code :class="`line-numbers language-ts`">
// form item 配置项 继承ElFormItem
export interface UniFormItemPropsType extends /* @vue-ignore */ ElFormItemPropsType {
  key: string
  hidden?: boolean | Ref&lt;boolean&gt;
  slots?: Record&lt;string, ((...args: any[]) =&gt; VNodeChild) | undefined&gt;
  component?: (...args: any[]) =&gt; VNodeChild
  [str: string]: any
}

// form 的参数 继承ElForm
export interface UniFormPropsType extends /* @vue-ignore */ ElFormPropsType {
  items?: UniFormItemPropsType[]
  formStyle?: CSSProperties
  itemMinWidth?: string
  formRef?: (val: any) =&gt; void
  onSubmit?: (model: Record&lt;string, any&gt;) =&gt; void
  onReset?: (model: Record&lt;string, any&gt;) =&gt; void
}

// form 实例
export interface UniFormInstance {
  switchHidden: (val?: boolean) =&gt; void
  validate: FormInstance['validate']
  resetFormModel: () =&gt; void
  formExpose: &lt;T extends keyof FormInstance&gt;(key: T) =&gt; FormInstance[T]
  formRef: FormInstance
  $el: HTMLElement
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
const ks = ['UniForm/']

const attrData: AttrListItemType[] = [
  { attr: 'items', desc: '表单元素配置，UniFormItemPropsType 继承自 ElFormItem', type: 'UniFormItemPropsType[]', default: '--' },
  { attr: 'formStyle', desc: '透传到表单的样式', type: 'CSSProperties', default: '--' },
  { attr: 'itemMinWidth', desc: '元素最小宽度，如果给1fr，会占整行，使用的是 grid 布局', type: 'string', default: '--' },
  { attr: 'formRef', desc: '获取 ElForm 实例的方法', type: '(val: any) => void', default: '--' },
  { attr: 'on-submit', desc: '如果有 btns 那就是提交的点击事件', type: 'Function', default: '--' },
  { attr: 'on-reset', desc: '如果有 btns 那就是重置的点击事件', type: 'Function', default: '--' },
]
const slotData: AttrListItemType[] = [
  { attr: 'items 中对应{key}', desc: 'key会对应 ElFormItem 组件的 default 的插槽' },
  { attr: 'items 中对应{key}_{slotName}', desc: '比如 key_label，可以对应 ElFormItem 组件的 label 插槽' },
]

const instanData: AttrListItemType[] = [
  { attr: 'formRef', desc: '返回 ElForm 的实例', type: 'Object' },
  { attr: 'formExpose', desc: '函数的参数是 ElForm 实例的 key，也就是说，通过这个，可以访问所有 ElForm 实例数据', type: 'Function' },
  { attr: 'switchHidden', desc: 'item 元素中如果有 hidden 属性，可以切换此属性', type: 'Function' },
  { attr: 'validate', desc: '表单验证，就是 ElForm 实例的表单验证方法', type: 'Function' },
  { attr: 'resetFormModel', desc: '表单重置的方法', type: 'Function' },
]
const itemData: AttrListItemType[] = [
  { attr: 'key', desc: '配置的唯一值，如果没有 prop 会作为 prop 使用，必填', type: 'string' },
  { attr: 'hidden', desc: '是否需要元素默认隐藏，如果存在此属性，btns 会多出一个切换按键', type: 'boolean' },
  { attr: 'slots', desc: 'ElFormItem 的插槽对象集合', type: 'Object' },
  { attr: 'component', desc: 'ElFormItem 的 default 插槽，快捷方式，优先级低于 slots.default', type: 'Function' },
]
</script>
