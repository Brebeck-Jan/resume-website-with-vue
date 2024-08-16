<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps(['text', 'index'])

</script>

<template>
  <div style="width: 100%">
    <div :class="[index % 2 == 0 ? 'card even' : 'card odd']">
      <li class="cvItem">{{ props.text }}</li>
      <li class="cvItem">{{ props.text }}</li>
      <li class="cvItem">{{ props.text }}</li>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 15px;
  border-style: solid;
  border-color: black;
  width: fit-content;
  padding: 5%;
}

.odd {
  text-align: right;
  margin-right: 10%;
  margin-left: auto;
}

.even {
  text-align: left;
  margin-left: 10%;
  margin-right: auto;
}

</style>