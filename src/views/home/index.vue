<template>
  <div class="homeWrap">
    <h1 style="text-align: center"></h1>
    <AcatarUploader @onDelete="handleDelete" />
  </div>
</template>

<script setup>
import AcatarUploader from "@/components/Upload/AcatarUploader.vue";

const handleDelete = () => {
  console.log("删除了");
};
</script>
