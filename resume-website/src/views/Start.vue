<script setup lang="ts">
import startItemsDe from "../assets/startItemsDe.json"
import startItemsEn from "../assets/startItemsEn.json"
import StartCardContent from "@/components/start/startCardContent.vue";
import '../index.css'
import {useI18n} from "vue-i18n";
import {ref, watch} from "vue";

const {locale} = useI18n();
let startItems = ref(locale.value === "de" ? startItemsDe : startItemsEn)

watch(locale, () => {
  startItems.value = locale.value === "de" ? startItemsDe : startItemsEn
  console.log('locale', locale.value);
});
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