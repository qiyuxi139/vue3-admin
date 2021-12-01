<template>
  <div v-if="!item.hidden" class="app_sidebar_item">
    <template v-if="showSingleMenu">
      <SingleMenu :isNext="isNext" :item="item.children ? item.children[0] : item" :path="path" />
    </template>
    <el-sub-menu v-else :index="item.path" popper-append-to-body>
      <template v-slot:title v-if="item.meta">
        <SvgIcon v-if="item.meta.icon" :icon="item.meta && item.meta.icon" />
        <el-badge :is-dot="item.isDot" :value="item.tipsNum || undefined" :max="99">
          <span>{{ item.meta.title }}</span>
        </el-badge>
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :isNext="true"
        :item="child"
        :path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-sub-menu>
  </div>
</template>

<script setup>
import { toRefs, computed } from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
import SingleMenu from "./SingleMenu.vue";
import { isExternal } from "@/utils/validate";
import { join } from "@/utils/path";
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
    default: ""
  }
});
const { item, isNext, path } = toRefs(props);

const showSingleMenu = computed(() => {
  const info = item.value;
  return !!(
    !!info &&
    (!info.children || info.children.length === 1 || info.noShowingChildren) &&
    !info.alwaysShow
  );
});

function resolvePath(routePath) {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(path.value)) {
    return path.value;
  }
  return join(path.value, routePath);
}
</script>
