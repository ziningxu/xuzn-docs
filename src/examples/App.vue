<script setup>
import { ref } from 'vue'
const msg = ref('自定义的')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
