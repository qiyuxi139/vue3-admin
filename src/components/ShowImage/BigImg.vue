<template>
  <el-popover :placement="position" :width="showWidth" :trigger="trigger">
    <template #reference>
      <el-image :src="src" />
    </template>
    <el-image :src="src" style="width: 100%" />
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
  }
});
const { src, trigger, position, showWidth } = toRefs(props);
</script>

<style lang="scss"></style>
