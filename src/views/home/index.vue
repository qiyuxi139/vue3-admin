<template>
  <div class="homeWrap">
    <el-button
      type="primary"
      v-copy="'这是一个复制的内容'"
      v-copy:success="handleSuccess"
      v-copy:error="handleError"
      >测试请求</el-button
    >
    <el-button @click="handleClick">点击复制</el-button>
  </div>
</template>

<script setup>
import message from "@/utils/reset/mElMessage";
import { copy } from "@/utils/copy";

const handleSuccess = (e) => {
  message.success("复制成功", e);
};

const handleError = (e) => {
  message.success("复制失败", e);
};

const handleClick = () => {
  copy({
    text: "这是点击复制的内容"
  });
};
</script>
