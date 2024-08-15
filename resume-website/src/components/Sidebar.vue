<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="child">
    <h1>Sidebar</h1>
    <nav>
      <RouterLink to="/start">Start</RouterLink>
      <RouterLink to="/cv">CV</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.child {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
  padding: 20px;
  font-size: 20px;
  line-height: 20px;
  color: #ffe8c3;
  background-color: #eab768;
  border-radius: 10px;
  border: 10px solid #f5cc8b;
}
</style>