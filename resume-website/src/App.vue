<script setup lang="ts">
import {RouterView} from 'vue-router'
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="parent">
    <Header></Header>
    <div class="main">
      <Sidebar></Sidebar>
      <RouterView class="mainContent content"/>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.parent {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: lightgrey;
}

.content {
  flex-grow: 1;
}

.main {
  display: flex;
  flex-grow: 1;
  z-index: 1;
}

.mainContent {
/*  display: flex;
  align-items: center;
  justify-content: center; */
  /*
  outline-color: yellow;
  outline-style: solid;
  */
  padding: 5%;
}
</style>
