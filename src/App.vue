<template>
  <el-config-provider :locale="locale">
    <router-view v-if="isRouterAlive" />
  </el-config-provider>
</template>

<script setup>
import { ref, nextTick, provide } from "vue";
import useLang from "@/hooks/useLang";

const { locale } = useLang();

const isRouterAlive = ref(true);

const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
};

provide("reload", reload);

console.log(import.meta.env);
</script>

<style lang="scss"></style>
