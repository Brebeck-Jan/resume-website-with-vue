<script setup lang="ts">
import startItems from "../assets/startItems.json"
import StartCardContent from "@/components/start/startCardContent.vue";
import LanguageSwitcher from '@/components/LanguageSelector.vue'
import '../index.css'
</script>

<template>
  <div>
    <LanguageSwitcher></LanguageSwitcher>
    <p>{{ $t("home.header") }}</p>
    <p>{{$t("home.created_by", {company: "Lokalise"})}}</p>
    <p>{{ $t("home.num_visits", 10) }}</p>
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