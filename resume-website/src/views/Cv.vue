<script setup lang="ts">
import Card from "@/components/Card.vue";
import cvItems from "../assets/cvItems.json"
import CvCardContent from "@/components/cv/cvCardContent.vue";

</script>

<template>
  <div>
    <Card
        v-for="(cvItem, index) in cvItems"
        :item="cvItem"
        :component="CvCardContent"
        :index="index"
        :key="index"
    />
  </div>
</template>