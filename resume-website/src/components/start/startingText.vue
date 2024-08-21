<script setup lang="ts">
import {defineProps} from "vue"

const props = defineProps(['text'])
</script>

<template>
  <p style="width:50%; text-align: left">{{ props.text }}</p>
</template>

<style scoped>

</style>