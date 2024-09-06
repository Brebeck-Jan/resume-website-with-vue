<script setup lang="ts">
import Card from "@/components/Card.vue";
import cvItemsDe from "../assets/cvItemsDe.json"
import cvItemsEn from "../assets/cvItemsEn.json"
import CvCardContent from "@/components/cv/cvCardContent.vue";
import {useI18n} from "vue-i18n";
import {ref, watch} from "vue";

const {locale} = useI18n();
let cvItems = ref(locale.value === "de" ? cvItemsDe : cvItemsEn)

watch(locale, () => {
  cvItems.value = locale.value === "de" ? cvItemsDe : cvItemsEn
  console.log('locale', locale.value);
});
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