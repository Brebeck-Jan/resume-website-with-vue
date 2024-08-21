<script setup lang="ts">
import {defineProps, ref} from "vue";
import cofinpro from "../../assets/cofinpro.jpg"
import dtd from "../../assets/dtd.jpg"
import dto from "../../assets/dto.jpg"

const props = defineProps(['item', 'index'])

const images = [cofinpro, dto, dtd]
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
  <div style="width: 20%;">
    <img alt="company-picture" :src="images[props.item.pic]" style="width: 100%; border-radius: 50%;">
  </div>
  <div style="width: 530px; padding-left: 5%; color: black; height: fit-content">
    <ul>
      <li class="item">{{ props.item.company }}</li>
      <li class="item">{{ props.item.from }} - {{ props.item.to ? props.item.to : "heute" }}</li>
      <li class="item">{{ props.item.role }}</li>
      <Transition :name="showMore.toString()">
        <li v-show="props.item.description" class="item" :key="showValue.toString()">{{ descriptionText }}</li>
      </Transition>
    </ul>
    <div style="display: flex; justify-content: center; margin: 1%">
      <button style="" @click="handleShowInput" v-if="props.item.description">{{ showValue }}</button>
    </div>
  </div>
</template>

<style scoped>
button {
  background-color: lightcyan;
  border-radius: 15px;
}

.true-enter-active {
  transition: opacity 1s ease;
}

.true-enter-from {
  opacity: 0;
}
</style>
