<script setup lang="ts">
import {defineProps, ref, watch} from "vue";
import cofinpro from "../../assets/cofinpro.jpg"
import dtd from "../../assets/dtd.jpg"
import dto from "../../assets/dto.jpg"
import {useI18n} from "vue-i18n";

const props = defineProps(['item', 'index'])
const {t} = useI18n();

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
let showValue = ref(t("cv.expandButton"))
let descriptionText = ref(getTeaserText())

// Refresh teasers if language is changed
watch(() => (props.item.description), (_) => {
  descriptionText.value = getTeaserText()
  showValue.value = t("cv.expandButton")
  showMore.value = false
})

const handleShowInput = () => {
  showMore.value = !showMore.value;
  showValue.value = showMore.value ? t("cv.collapseButton") : t("cv.expandButton");
  descriptionText.value = showMore.value ? props.item.description : getTeaserText();
}
</script>

<template>
  <div class="w-40 h-40">
    <img class="m-auto rounded-[15px]" alt="company-picture" :src="images[props.item.pic]">
  </div>
  <div class="pl-5">
    <div class="flex w-[450px]">
      <ol class="pl-0 list-none">
        <li>{{ props.item.company }}</li>
        <li>{{ props.item.from }} - {{ props.item.to ? props.item.to : "heute" }}</li>
        <li>{{ props.item.role }}</li>
        <Transition :name="showMore.toString()">
          <li v-show="props.item.description" class="item" :key="showValue.toString()" v-html="descriptionText"></li>
        </Transition>
      </ol>
    </div>
    <div class="mt-1 mb-0 flex align-middle justify-center h-[55px]">
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
  height: 36px;
  margin: auto;
}

.true-enter-active {
  transition: opacity 1s ease;
}

.true-enter-from {
  opacity: 0;
}
</style>
