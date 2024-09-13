<template>
  <UniRepl :files="files" />
</template>
<script setup lang="ts">
import UniRepl from '@/components/UniRepl'
import { toReplFiles } from '@/storage'
const files = toReplFiles()
// const files = {}
</script>
<style lang="scss"></style>
