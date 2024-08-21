<script setup lang="ts">
import {defineProps} from "vue"
import j from "../../assets/j.png"

const props = defineProps(['pic'])

const images = [j];
</script>

<template>
  <div style="width: 50%">
    <img alt="company-picture" style="width: 300px; height: 300px;" :src="images[props.pic]">
  </div>
</template>

<style scoped>

</style>