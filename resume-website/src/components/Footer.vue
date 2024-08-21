<script setup lang="ts">

</script>

<template>
  <div class="footer">
      <div class="socialMediaContainer">
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
.socialMediaContainer {
  float: right;
  width: 10%;
  margin-right: 5%;
  align-content: center;
  align-items: center;
  padding-top: 7px;
}

img {
  width: 35px;
  height: 35px;
}

a {
  padding: 0;
  padding-left: 5%;
}

.footer {
  height: 500px;
  background-color: #020202;
  align-content: center;
  align-items: center;
  margin-top: auto;
  vertical-align: center;
}
</style>