<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="header">
    <RouterLink to="/" style="width: 10%; margin: 2%">
      <img class="profilePicture" alt="profile-picture" style="width: 100%; height:75%" src="../assets/j.png"/>
      <!--    <img class="profilePicture" alt="profile-picture" style="width: 10%; height:75%" src="../assets/profile_pic.jpg"/>-->
    </RouterLink>
    <div>
      <h1 style="align-items: center; align-content:center; text-align: center; line-height: normal">Jan
        <br/> Brebeck</h1>
    </div>
    <div style="flex-grow: 1"></div>
    <div class="navigationItems">
      <RouterLink class="link" to="/">Startseite</RouterLink>
      <RouterLink class="link" to="/cv">Lebenslauf</RouterLink>
      <RouterLink class="link" to="/contact">Kontakt</RouterLink>
      <RouterLink class="link" to="/legal">Impressum</RouterLink>
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
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin: 5%
}

.header {
  background-color: #666666;
  border-bottom-color: black;
  border-bottom-style: solid;
  height: 20%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
}

</style>