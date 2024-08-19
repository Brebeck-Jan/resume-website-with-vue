<script setup lang="ts">
import CvCard from "@/components/cv/CvCard.vue";
import cvItems from "../assets/cvItems.json"
</script>

<template>
  <div>

  </div>
  <div style="height:100%">
    <CvCard
        v-for="(cvItem, index) in cvItems"
        :cvItem="cvItem"
        :index="index"
        :key="index"
    />
  </div>

</template>

<style scoped>

</style>