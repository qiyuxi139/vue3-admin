<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import useLang from "@/hooks/useLang";

const { locale } = useLang();

console.log(import.meta.env);
</script>

<style lang="scss"></style>
