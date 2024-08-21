<script setup lang="ts">
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <div class="parent">
    <Header></Header>
    <div class="main" style="background-color: lightcyan">
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
}

.main {
  flex-grow: 1;
  padding: 5%;
}
</style>
