<script setup lang="ts">
import startItems from "../assets/startItems.json"
import StartCardContent from "@/components/start/startCardContent.vue";
import '../index.css'
</script>

<template>
  <div>
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