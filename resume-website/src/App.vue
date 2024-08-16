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
