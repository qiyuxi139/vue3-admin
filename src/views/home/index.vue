<template>
  <div class="homeWrap">
    首页
    <el-button @click="handleError">触发错误</el-button>
  </div>
</template>

<script setup>
console.log(import.meta.env);

const handleError = () => {
  throw new TypeError("发生错误了");
};
</script>
