<script setup lang="ts">
import {defineProps, ref} from "vue";

const props = defineProps(['cvItem', 'index'])

const getTeaserText = () => {
  if (props.cvItem && props.cvItem.description) {
    if (props.cvItem.description.length > 60) {
      console.log(props.cvItem.description.split(" ").slice(0, 10))
      console.log(props.cvItem.description.split(" ").slice(0, 10).join(" "))
      return props.cvItem.description.split(" ").slice(0, 5).join(" ") + "..."
    } else {
      return props.cvItem.description
    }
  }
}

let showMore = ref(false);
let showValue = ref("mehr anzeigen")
let descriptionText = ref(getTeaserText())

const handleShowInput = () => {
  showMore.value = !showMore.value;
  showValue.value = showMore.value ? "weniger anzeigen" : "mehr anzeigen";
  descriptionText.value = showMore.value ? props.cvItem.description : getTeaserText();
  console.log(showMore.value)
}

</script>

<template>
  <div id="card" :class="[index % 2 == 0 ? 'even' : 'odd']">
    <div style="width: 20%;">
      <img alt="company-picture" :src="props.cvItem.pic" style="width: 100%; border-radius: 50%;">
    </div>
    <div style="width: 530px; padding-left: 5%">
      <ul>
        <li class="cvItem">{{ props.cvItem.company }}</li>
        <li class="cvItem">{{ props.cvItem.from }} - {{ props.cvItem.to ? props.cvItem.to : "heute" }}</li>
        <li class="cvItem">{{ props.cvItem.role }}</li>
        <Transition :name="showMore">
          <li v-show="props.cvItem.description" class="cvItem" :key="showValue.toString()">{{ descriptionText }}</li>
        </Transition>
      </ul>
      <div style="display: flex; justify-content: center; margin: 1%">
        <button style="" @click="handleShowInput" v-if="props.cvItem.description">{{ showValue }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#card {
  border-radius: 15px;
  border-style: solid;
  border-color: black;
  width: fit-content;
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

button {
  background-color: lightcyan;
  border-radius: 15px;
}

.true-enter-active
{
  transition: opacity 1s ease;
}

.true-enter-from
{
  opacity: 0;
}
</style>