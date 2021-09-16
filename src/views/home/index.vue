<template>
  <div class="homeWrap">
    <el-button
      type="primary"
      v-copy="'测试请求'"
      v-copy:success="handleSuccess"
      v-copy:error="handleError"
      >测试请求</el-button
    >
  </div>
</template>

<script setup>
import message from "@/utils/reset/mElMessage";
const handleSuccess = () => {
  message.success("复制成功");
};

const handleError = () => {
  message.error("复制失败");
};
</script>
