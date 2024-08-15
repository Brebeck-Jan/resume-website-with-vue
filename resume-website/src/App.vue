<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>

  <div class="parent">
    <Header></Header>
    <div class="main">
      <Sidebar></Sidebar>
      <RouterView class="child content"/>
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

.content {
  flex-grow: 1;
}

.main {
  display: flex;
  flex-grow: 1;
}

.child {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
  padding: 20px;
  font-size: 20px;
  line-height: 20px;
  border: 10px solid #f5cc8b;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
