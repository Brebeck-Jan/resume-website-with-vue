<script setup lang="ts">
import CvItem from "@/components/cv/CvItem.vue";

const textsForCvItems = ["first item", "second item", "third item"]

</script>

<template>
  <div>

  </div>
  <div style="height:100%">
    <CvItem
        v-for="(item, index) in textsForCvItems"
        :text="item"
        :index="index"
        :key="item"
    />
  </div>

</template>

<style scoped>

</style>