<script setup lang="ts">
import {defineProps} from "vue";
import StartingImage from "@/components/start/startingImage.vue";
import StartingText from "@/components/start/startingText.vue";

const props = defineProps(['item', 'index'])

</script>

<template>
  <div class="flex h-fit" v-if="index % 2 == 0 " >
    <starting-text :text="item.text"/>
    <starting-image class="" :pic="item.pic"/>
  </div>
  <div class="flex h-fit" v-if="index % 2 != 0">
    <starting-image :pic="item.pic"/>
    <starting-text class="ml-auto" :text="item.text"/>
  </div>

</template>
