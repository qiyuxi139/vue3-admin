<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import useLocale from "@/hooks/useLocale";
const { locale } = useLocale();
</script>

<style lang="scss"></style>
