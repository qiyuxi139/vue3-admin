<template>
  <div id="app">
    <SvgIcon name="arrow" />
    <p class="test">红色文字</p>
    <div class="wang"></div>
    <div v-if="1">1</div>
  </div>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="scss">
.test {
  color: $red;
}
</style>
