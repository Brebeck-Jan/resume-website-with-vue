<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="footer">
    <RouterLink to="/legal">Impressum</RouterLink>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
}
</style>