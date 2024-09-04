<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="header bg-black h-1/8">
    <RouterLink class="flex content-center ml-5" to="/">
          <img class="rounded-full w-[100px] h-[100px] ml-0 m-5" alt="profile-picture" src="../assets/profile_pic.jpg"/>
    </RouterLink>
    <div >
      <h1 class="text-xl items-center content-center text-center">Jan
        <br/> Brebeck</h1>
    </div>
    <div class="flex-grow"></div>
    <div class="content-center align-center mr-5">
      <RouterLink class="link" to="/">Startseite</RouterLink>
      <RouterLink class="link" to="/cv">Lebenslauf</RouterLink>
      <RouterLink class="link" to="/projects">Projekte</RouterLink>
      <RouterLink class="link" to="/certificates">Zertifikate</RouterLink>
      <RouterLink class="link" to="/contact">Kontakt</RouterLink>
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