<template>
  <el-popover :placement="position" :width="showWidth" :trigger="trigger">
    <template #reference>
      <el-image
        :src="src"
        class="my-image"
        :style="`width: ${mainSize.width}px;height: ${mainSize.height}px;`"
      >
        <template #placeholder>
          <div class="image-slot">加载中<span class="dot">...</span></div>
        </template>
      </el-image>
    </template>
    <el-image class="my-image" :src="src" style="width: 100%">
      <template #placeholder>
        <div class="image-slot">加载中<span class="dot">...</span></div>
      </template>
    </el-image>
  </el-popover>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  trigger: {
    type: String,
    default: "hover"
  },
  position: {
    type: String,
    default: "right"
  },
  showWidth: {
    type: Number,
    default: 450
  },
  mainSize: {
    type: Object,
    default: () => ({
      width: 159,
      height: 159
    })
  }
});
const { src, trigger, position, showWidth, mainSize } = toRefs(props);
</script>

<style lang="scss">
.my-image {
  .image-slot {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c0c4cc;
    background-color: #f5f7fa;
  }
}
</style>
