<template>
  <select @change="switchLanguage" class="bg-black"
  >
    <option
        v-for="sLocale in supportedLocales"
        :key="`locale-${sLocale}`"
        :value="sLocale"
        :selected="sLocale === locale"
    >
      {{ sLocale }}
    </option>
  </select>
</template>

<script setup lang="ts">
import Tr from "@/i18n/translation"
import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";

const router = useRouter()
const {t, locale} = useI18n()

const supportedLocales = Tr.supportedLocales

const switchLanguage = async (event: any) => {
  const newLocale = event.target.value
  await Tr.switchLanguage(newLocale)
  try {
    await router.replace({params: {locale: newLocale}})
  } catch (e) {
    console.log(e)
    router.push("/")
  }
}
</script>