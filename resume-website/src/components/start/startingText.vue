<script setup lang="ts">
import {defineProps} from "vue"

const props = defineProps(['text'])
</script>

<template>
  <div class="w-1/2 flex items-center">
    <p class="text-left">{{ props.text }}</p>
  </div>
</template>

<style scoped>

</style>