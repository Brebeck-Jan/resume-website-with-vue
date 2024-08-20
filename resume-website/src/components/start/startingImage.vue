<script setup lang="ts">
import {defineProps} from "vue"

const props = defineProps(['pic'])
</script>

<template>
  <div style="width: 50%">
    <img alt="company-picture" :src="props.pic" style="width: 10%;">
  </div>
</template>

<style scoped>

</style>