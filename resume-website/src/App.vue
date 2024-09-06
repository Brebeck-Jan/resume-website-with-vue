<script setup lang="ts">
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col font-stylish text-white h-[100vh]">
    <Header/>
    <div class="p-5 bg-neutral-900 h-[100%]">
      <RouterView class=""/>
    </div>
    <Footer></Footer>
  </div>
</template>