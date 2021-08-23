<template>
  <router-view v-slot="{ Component }">
    <transition name="animate-main" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup></script>

<style lang="scss">
.animate-main-enter-active,
.animate-main-leave-active {
  transition: opacity 0.15s, transform 0.15s;
}

// 进入元素开始状态
.animate-main-enter-from {
  opacity: 0;
  transform: translateX(-50%);
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
  transform: translateX(50%);
}
</style>
