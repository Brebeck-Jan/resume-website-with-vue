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
}

</script>

<template>
  <div style="width: 150px; height: 150px">
    <img alt="company-picture" :src="images[props.item.pic]" style="width: 100%; border-radius: 15px;">
  </div>
  <div style="width: 530px; height: 150px; padding-left: 5%;">
    <div style="height: 122.5px">
      <ol style="list-style-type: none; padding-left: 0">
        <li class="item">{{ props.item.company }}</li>
        <li class="item">{{ props.item.from }} - {{ props.item.to ? props.item.to : "heute" }}</li>
        <li class="item">{{ props.item.role }}</li>
        <Transition :name="showMore.toString()">
          <li v-show="props.item.description" class="item" :key="showValue.toString()">{{ descriptionText }}</li>
        </Transition>
      </ol>
    </div>
    <div style="margin-top: auto; margin-bottom: 0; display: flex; height: 27.5px">
      <button class="showMoreButton" @click="handleShowInput" v-if="props.item.description">{{ showValue }}</button>
    </div>
  </div>
</template>

<style scoped>
.showMoreButton {
  background-color: #ea7609;
  border-radius: 15px;
  border-style: none;
  padding: 6px;
}

.true-enter-active {
  transition: opacity 1s ease;
}

.true-enter-from {
  opacity: 0;
}
</style>
