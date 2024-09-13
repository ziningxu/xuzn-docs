<template>
  <div>
    <el-anchor direction="vertical" type="default" :offset="30" @click.prevent v-bind="$attrs">
      <RenderAnchorLink :items="items" />
    </el-anchor>
  </div>
</template>
<script setup lang="tsx">
import { ElAnchor, ElAnchorLink } from 'element-plus'
import { TypeComponentProps } from 'xuzn-ui'
import { defineComponent } from 'vue'
export interface UniAnchorItemType {
  key: string
  title: string
  level: number
  children: UniAnchorItemType[]
}
type ElAnchorPropsType = TypeComponentProps<typeof ElAnchor>
interface PropsType extends /* @vue-ignore */ ElAnchorPropsType {
  items: UniAnchorItemType[]
}
defineOptions({ inheritAttrs: false })
const props = defineProps<PropsType>()
const RenderAnchorLink = defineComponent({
  props: ['items'],
  render() {
    const items: UniAnchorItemType[] = this.$props.items || []
    return items.map((item) => {
      return (
        <ElAnchorLink key={item.key} href={item.key}>
          {{
            default() {
              return item.title
            },
            'sub-link'() {
              return item.children?.length ? <RenderAnchorLink items={item.children} /> : null
            },
          }}
        </ElAnchorLink>
      )
    })
  },
})
</script>
<style lang="scss"></style>
