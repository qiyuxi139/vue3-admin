<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { watchEffect } from "vue";
import useLocale from "@/hooks/useLocale";
const { locale } = useLocale();
watchEffect(() => {
  const a = locale.value;
  console.log(a, "watch");
});
</script>

<style lang="scss"></style>
