<template>
  <router-view v-slot="{ Component }">
    <transition name="animate-main" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
// import { useRoute } from "vue-router";
// const route = useRoute();
</script>

<style lang="scss">
.animate-main-enter-active,
.animate-main-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

// 进入元素开始状态
.animate-main-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

// 离开过的的开始状态
// 进入元素结束状态
.animate-main-leave-from,
.animate-main-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.animate-main-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
