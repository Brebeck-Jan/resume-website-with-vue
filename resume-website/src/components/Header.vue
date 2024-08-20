<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="header">
    <RouterLink class="toHome" to="/">
          <img class="profilePicture" alt="profile-picture" src="../assets/profile_pic.jpg"/>
    </RouterLink>
    <div>
      <h1 style="align-items: center; align-content:center; text-align: center; line-height: normal">Jan
        <br/> Brebeck</h1>
    </div>
    <div style="flex-grow: 1"></div>
    <div class="navigationItems">
      <RouterLink class="link" to="/">Startseite</RouterLink>
      <RouterLink class="link" to="/cv">Lebenslauf</RouterLink>
      <RouterLink class="link" to="/projects">Projekte</RouterLink>
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


@media (hover: hover) {
  .link:hover {
    background-color: hsla(0, 0%, 22%, 0.2);

  }
}

.profilePicture {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 5%
}

.header {
  background-color: #666666;
  border-bottom-color: black;
  border-bottom-style: solid;
  height: 115px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
}

.toHome {
  justify-content: center ;
  display: flex;
  width: 15%
}

</style>