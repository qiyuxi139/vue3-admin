<template>
  <keep-alive>
    <router-view />
  </keep-alive>
</template>

<script setup>
console.log("当前BASE_URL", import.meta.env.VITE_BASE_URL);
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="scss"></style>
