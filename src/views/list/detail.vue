<template>
  <div class="list_detail_wrap">
    列表详情页面
    <div>{{ route.params.id }}</div>
  </div>
</template>

<script setup>
import { unref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log(unref(route));
</script>

<style lang="scss">
.view1_wrap {
  font-size: 50px;
}
</style>
