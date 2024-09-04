<script setup lang="ts">
import {defineProps} from "vue"
import j from "../../assets/j.png"
import hackathon from "../../assets/hackathon.jpeg"
import rennrad from "../../assets/rennrad.jpeg"
import mtb from "../../assets/mtb.jpeg"

const props = defineProps(['pic'])

const images = [j, hackathon, rennrad, mtb];
</script>

<template>
  <div class="h-60 w-1/2 flex">
    <img alt="company-picture" class="m-auto h-5/6 rounded"  :src="images[props.pic]">
  </div>
</template>

<style scoped>

</style>