<script setup lang="ts">
import {defineProps} from "vue";
import StartingImage from "@/components/start/startingImage.vue";
import StartingText from "@/components/start/startingText.vue";

const props = defineProps(['item', 'index'])

</script>

<template>
  <div v-if="index % 2 == 0 " style="display: flex; text-align: center;">
    <starting-text style="" :text="item.text"/>
    <starting-image style="margin-left: auto" :pic="item.pic"/>
  </div>
  <div v-if="index % 2 != 0 " style="display: flex">
    <starting-image style="" :pic="item.pic"/>
    <starting-text style="margin-left: auto" :text="item.text"/>
  </div>

</template>

<style scoped>
</style>
