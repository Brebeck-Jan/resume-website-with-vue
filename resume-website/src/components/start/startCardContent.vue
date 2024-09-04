<script setup lang="ts">
import {defineProps} from "vue";
import StartingImage from "@/components/start/startingImage.vue";
import StartingText from "@/components/start/startingText.vue";

const props = defineProps(['item', 'index'])

</script>

<template>
  <div class="card" v-if="index % 2 == 0 " >
    <starting-text :text="item.text"/>
    <starting-image class="right" :pic="item.pic"/>
  </div>
  <div class="card" v-if="index % 2 != 0">
    <starting-image :pic="item.pic"/>
    <starting-text class="right" :text="item.text"/>
  </div>

</template>

<style scoped>
.card{
  height: 300px;
  display: flex
}

.right {
  margin-left: auto
}
</style>
