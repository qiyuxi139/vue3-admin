<template>
  <svg :class="svgClass" v-bind="$attrs" :style="{ color: color }" @click="handleClick">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ""
  }
});

const emit = defineEmits(["click"]);

const iconName = computed(() => `#icon-${props.icon}`);
const svgClass = computed(() => {
  if (props.icon) {
    return `svg-icon icon-${props.icon}`;
  }
  return "svg-icon";
});

const handleClick = (e) => {
  emit("click", e);
};
</script>

<style lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
