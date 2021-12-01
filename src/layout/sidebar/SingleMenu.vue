<template>
  <AppLink v-if="item.meta" :to="path">
    <el-menu-item :index="path" :class="{ 'submenu-title-noDropdown': !isNext }">
      <template #title>
        <el-badge :is-dot="item.isDot" :max="99" :value="item.tipsNum || undefined">
          <span>{{ item.meta.title }}</span>
        </el-badge>
      </template>
      <SvgIcon v-if="item.meta && item.meta.icon" :icon="item.meta && item.meta.icon" />
    </el-menu-item>
  </AppLink>
</template>

<script setup>
import { toRefs } from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
import AppLink from "./Link.vue";
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isNext: {
    type: Boolean,
    default: false
  },
  path: {
    type: String,
    required: true
  }
});
const { item, isNext } = toRefs(props);
</script>
