<script setup lang="ts">

import {RouterLink} from "vue-router";
import {useWindowSize} from '@vueuse/core'
import Tr from "@/i18n/translation";

const {width} = useWindowSize()
const isBigScreen = width.value > 700

</script>

<template>
  <div class="header bg-black h-1/8">
    <RouterLink class="flex content-center ml-5" :to="Tr.i18nRoute({ name: 'home' })">
      <img class="rounded-full w-[100px] h-[100px] ml-0 m-5" alt="profile-picture" src="../assets/profile_pic.jpg"/>
    </RouterLink>
    <div>
      <h1 class="text-xl items-center content-center text-center">Jan
        <br/> Brebeck</h1>
    </div>
    <div class="flex-grow"></div>
    <div class="content-center align-center mr-5">
      <RouterLink class="link" :to="Tr.i18nRoute({ name: 'home' })">Startseite</RouterLink>
      <RouterLink v-if="isBigScreen" class="link" :to="Tr.i18nRoute({ name: 'cv' })">Lebenslauf</RouterLink>
      <RouterLink v-if="isBigScreen" class="link" :to="Tr.i18nRoute({ name: 'projects' })">Projekte</RouterLink>
      <RouterLink v-if="isBigScreen" class="link" :to="Tr.i18nRoute({ name: 'certificates' })">Zertifikate</RouterLink>
      <RouterLink v-if="isBigScreen" class="link" :to="Tr.i18nRoute({ name: 'contact' })">Kontakt</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.link {
  margin: 10px;
}

@media (hover: hover) {
  .link:hover {
    background-color: hsla(150, 0%, 22%, 0.2);
  }
}

.header {
  border-bottom-style: solid;
  display: flex;
  align-items: center;
  position: sticky;
}
</style>