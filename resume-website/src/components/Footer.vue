<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="footer">
    <div style="float: right; align-content: center; align-items: center; height: 100%; margin-right: 5%">
      <a href="https://www.linkedin.com/in/jan-brebeck-596440176/" target="_blank">
        <img alt="profile-picture" src="../assets/linkedin.png"/>
      </a>
      <a href="https://www.xing.com/profile/JanNiklas_Brebeck" target="_blank">
        <img alt="profile-picture" src="../assets/xing.png"/>
      </a>
      <a href="https://github.com/Brebeck-Jan" target="_blank">
        <img alt="github" src="../assets/github.png"/>
      </a>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 50px;
  height: 50px;
  padding: 2%;
}

.footer {
  background-color: #666666;
  height: 10%;
}
</style>