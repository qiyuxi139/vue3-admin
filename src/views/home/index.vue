<template>
  <div class="homeWrap">
    <h1>首页</h1>
    <DataTimePicker v-model="form.range" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import DataTimePicker from "@/components/DataTimePicker.vue";
const form = reactive({
  range: []
});
</script>
