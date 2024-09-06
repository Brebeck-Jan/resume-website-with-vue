<script setup lang="ts">

import LanguageSwitcher from "@/components/LanguageSelector.vue";
</script>

<template>
  <div class="bg-black h-1/8" >
    <div class="float-left h-[84px] flex ml-5">
      <LanguageSwitcher></LanguageSwitcher>
    </div>
    <div class="float-right m-5 w-1/5 flex">
      <a class="w-9 h-9 block m-1 ml-auto" href="https://www.linkedin.com/in/jan-brebeck-596440176/" target="_blank">
        <img class="w-9 h-9" alt="profile-picture" src="../assets/linkedin.png"/>
      </a>
      <a class="w-9 h-9 block m-1" href="https://www.xing.com/profile/JanNiklas_Brebeck" target="_blank">
        <img class="w-9 h-9" alt="profile-picture" src="../assets/xing.png"/>
      </a>
      <a class="w-9 h-9 block m-1" href="https://github.com/Brebeck-Jan" target="_blank">
        <img class="w-9 h-9" alt="github" src="../assets/github.png"/>
      </a>
    </div>
  </div>
</template>

<style scoped>
</style>