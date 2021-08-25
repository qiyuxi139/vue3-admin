<template>
  <div class="homeWrap">
    <Pagination :total="100" />
    <el-button @click="handleClick">Click</el-button>
    <el-button @click="handleClick2">Click2</el-button>
    {{ t("lang") }}
  </div>
</template>

<script setup>
import Message from "@/utils/reset/mElMessage";
import Pagination from "@/components/Pagination.vue";
import { useLocaleInject } from "element-plus/packages/hooks/use-locale";
const { t } = useLocaleInject();

const handleClick = () => {
  Message.error("提示消息");
};

const handleClick2 = () => {
  Message.error("提示消息2");
};
</script>
