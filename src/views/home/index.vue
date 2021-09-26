<template>
  <div class="homeWrap">
    <MulipleUpload v-model="imgList" listType="text" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import MulipleUpload from "@/components/EasyUpload/MulipleUpload.vue";
const imgList = ref([]);
</script>
