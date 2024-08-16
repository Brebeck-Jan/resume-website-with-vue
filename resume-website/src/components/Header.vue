<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="header">
    <img class="profilePicture" alt="profile-psicture" src="../assets/j.png"/>
    <div>
      <h1 style="align-items: center; align-content:center; text-align: center; line-height: normal">Jan
        <br/> Brebeck</h1>
    </div>
          <div style="flex-grow: 1"></div>
    <div class="navigationItems">
      <RouterLink class="link" to="/">Startseite</RouterLink>
      <RouterLink class="link" to="/cv">Lebenslauf</RouterLink>
      <RouterLink class="link" to="/legal">Impressum</RouterLink>
      <RouterLink class="link" to="/contact">Kontakt</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.navigationItems {
  justify-content: center;
  align-content: center;
  place-content: center;
  margin-right: 5%;
}

.link {
  margin: 10px;
}

.profilePicture {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin: 5%
}

.header {
  border-bottom-color: black;
  border-bottom-style: solid;
  height: 20%;
  display: flex;
  align-items: center;
}
</style>