<script setup lang="ts">
import {defineProps, ref} from "vue";

const props = defineProps(['item', 'index', 'component'])

const getTeaserText = () => {
  if (props.item && props.item.description) {
    if (props.item.description.length > 60) {
      return props.item.description.split(" ").slice(0, 5).join(" ") + "..."
    } else {
      return props.item.description
    }
  }
}
</script>

<template>
  <div id="card" :class="[index % 2 == 0 ? 'even' : 'odd']">
    <component :is="component" :item="item"></component>
  </div>
</template>

<style scoped>
#card {
  border-radius: 15px;
  width: 66%;
  height: fit-content;
  min-height: 216px;
  padding: 2%;
  margin: 2%;
  display: flex;
  background-color: #2b2d2e;
}

#card.odd {
  margin-right: 10%;
  margin-left: auto;
}

#card.even {
  margin-left: 10%;
  margin-right: auto;
}
</style>