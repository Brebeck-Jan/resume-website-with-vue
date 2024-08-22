<script setup lang="ts">
// import {usePDF, VuePDF} from "VuePDF";
import PDF from "pdf-vue3";
import pdf from "../assets/HyperskillCertificateJavaIntro.pdf"
</script>

<template>
  <div>
    <h1>Hier entsteht eine Liste bisheriger Zertifikate</h1>
    <div style="margin-top: 67px">
      <PDF style="width:50%; " :src="pdf"/>
    </div>
  </div>
</template>

<style scoped>

</style>