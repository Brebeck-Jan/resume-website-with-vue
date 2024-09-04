<script setup lang="ts">
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex h-full flex-col font-stylish text-white" style="  display: flex;
  flex-direction: column;
  height: 100vh;">
    <Header/>
    <div class="flex-grow p-5 bg-neutral-900">
      <RouterView class="mainContent content"/>
    </div>
    <Footer></Footer>
  </div>
</template>