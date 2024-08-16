<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps(['text'])

</script>

<template>
<h2>{{ props.text}}</h2>
</template>

<style scoped>

</style>