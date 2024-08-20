<script setup lang="ts">
import Card from "@/components/Card.vue";
import startItems from "../assets/startItems.json"
import StartCardContent from "@/components/start/startCardContent.vue";

</script>

<template>
  <h1 style="padding-bottom: 20px">
    Über mich:
  </h1>
  <div style="height:100%">
    <start-card-content
        v-for="(startItem, index) in startItems"
        :item="startItem"
        :index="index"
        :key="index"
    />
  </div>

</template>

<style scoped>

</style>