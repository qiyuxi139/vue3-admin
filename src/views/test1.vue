<template>
  <div id="test1">
    <el-button @click="handleChangeRoute">改变路由权限</el-button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
console.log(router);
</script>

<style lang="scss"></style>
