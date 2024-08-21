<script setup lang="ts">
import {defineProps, ref} from "vue";

const props = defineProps(['item', 'index', 'component'])

const getTeaserText = () => {
  if (props.item && props.item.description) {
    if (props.item.description.length > 60) {
      console.log(props.item.description.split(" ").slice(0, 10))
      console.log(props.item.description.split(" ").slice(0, 10).join(" "))
      return props.item.description.split(" ").slice(0, 5).join(" ") + "..."
    } else {
      return props.item.description
    }
  }
}

let showMore = ref(false);
let showValue = ref("mehr anzeigen")
let descriptionText = ref(getTeaserText())

const handleShowInput = () => {
  showMore.value = !showMore.value;
  showValue.value = showMore.value ? "weniger anzeigen" : "mehr anzeigen";
  descriptionText.value = showMore.value ? props.item.description : getTeaserText();
  console.log(showMore.value)
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
  border-style: solid;
  border-color: black;
  width: fit-content;
  height: fit-content;
  min-height: 216px;
  padding: 2%;
  margin: 2%;
  display: flex;
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