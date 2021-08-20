<template>
  <div>
    <SvgIcon :icon="isFullRef ? 'exit-fullscreen' : 'fullscreen'" class="fullscreenIcon" @click="handleClick" />
  </div>
</template>

<script setup>
import SvgIcon from "../SvgIcon/index.vue";
import screenfull from "screenfull";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { ElMessage } from "element-plus";

const isFullRef = ref(false);

onMounted(() => {
  init();
});

onBeforeUnmount(() => {
  setScreenfull(false);
});
function init() {
  setScreenfull(true);
}

function setScreenfull(open) {
  if (screenfull.isEnabled) {
    screenfull[open ? "on" : "off"]("change", change);
  }
}

function change() {
  isFullRef.value = screenfull.isFullscreen;
}

function handleClick() {
  if (!screenfull.isEnabled) {
    ElMessage({ showClose: true, message: "你的浏览器暂不支持全屏浏览" });
    return;
  }
  screenfull.toggle();
}
</script>

<style lang="scss" scoped>
.fullscreenIcon {
  cursor: pointer;
  color: #5a5e66;
  width: 20px;
  height: 20px;
  &:hover {
    color: #409eff;
  }
}
</style>
