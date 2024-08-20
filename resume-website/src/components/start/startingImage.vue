<script setup lang="ts">
import {defineProps} from "vue"

const props = defineProps(['pic'])
</script>

<template>
  <div style="width: 50%">
    <img alt="company-picture" style="width: 300px; height: 300px;" :src="props.pic">
  </div>
</template>

<style scoped>

</style>