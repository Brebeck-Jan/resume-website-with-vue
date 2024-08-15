<script setup lang="ts">

</script>

<template>
  <div class="child">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>
    <h1>Header</h1>
  </div>
</template>

<style scoped>
.header {
  color: yellow;
  outline-style: solid;
  outline-color: yellow;
}

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