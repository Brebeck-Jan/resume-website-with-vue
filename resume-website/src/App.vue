<script setup lang="ts">
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col font-stylish text-white">
    <Header/>
<!--    <div class="flex-grow p-5 bg-neutral-900">-->
    <div class="p-5 bg-neutral-900">
      <RouterView class=""/>
    </div>
    <Footer></Footer>
  </div>
</template>