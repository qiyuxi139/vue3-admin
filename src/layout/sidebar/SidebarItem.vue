<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!childState.onlyOneChild.children || childState.onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <AppLink v-if="childState.onlyOneChild.meta" :to="resolvePath(childState.onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(childState.onlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': !isNext }"
        >
          <template #title>
            <span>{{ childState.onlyOneChild.meta.title }}</span>
          </template>
          <SvgIcon
            v-if="childState.onlyOneChild.meta && childState.onlyOneChild.meta.icon"
            :icon="childState.onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
          />
        </el-menu-item>
      </AppLink>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template v-slot:title v-if="item.meta">
        <SvgIcon v-if="item.meta.icon" :icon="item.meta && item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :isNext="true"
        :item="child"
        :basePath="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script setup>
import { toRefs, reactive } from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
import { isExternal } from "@/utils/validate";
import AppLink from "./Link.vue";
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  isNext: {
    type: Boolean,
    default: false
  },
  basePath: {
    type: String,
    default: ""
  }
});
const { item, isNext, basePath } = toRefs(props);

let childState = reactive({
  onlyOneChild: null
});
function hasOneShowingChild(children = [], parent) {
  const showingChildren = children.filter((item) => {
    if (item.hidden) {
      return false;
    }

    childState.onlyOneChild = item;
    return true;
  });

  if (showingChildren.length === 1) {
    return true;
  }

  if (showingChildren.length === 0) {
    childState.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
    return true;
  }

  return false;
}
function resolvePath(routePath) {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(basePath.value)) {
    return basePath.value;
  }
  if (basePath.value === "/") {
    return basePath.value + routePath + "";
  }
  return basePath.value + "/" + routePath;
}
</script>
