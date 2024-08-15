<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div class="innerDiv">
      <img class="profilePicture" alt="profile-picture" src="@/assets/placeholder.png" width="125" height="125"/>
      <h1>Jan Brebeck</h1>
    </div>
  </div>
</template>

<style scoped>
.profilePicture {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  margin-right: 10%;
}

.header {
  border-radius: 16px;
}

.innerDiv {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
  color: #ffe8c3;
  background-color: lightblue;
  border-radius: 24px;
  padding: 8px;
  border: 10px solid #9c9c9c;
}
</style>