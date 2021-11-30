<template>
  <div v-if="!item.hidden" class="app_sidebar_item">
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
            <el-badge
              :is-dot="childState.onlyOneChild.isDot"
              :max="99"
              :value="childState.onlyOneChild.tipsNum || undefined"
            >
              <span>{{ childState.onlyOneChild.meta.title }}</span>
            </el-badge>
          </template>
          <SvgIcon
            v-if="childState.onlyOneChild.meta && childState.onlyOneChild.meta.icon"
            :icon="childState.onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
          />
        </el-menu-item>
      </AppLink>
    </template>
    <el-sub-menu v-else :index="resolvePath(item.path)" popper-append-to-body>
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
        :basePath="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-sub-menu>
  </div>
</template>

<script setup>
import { toRefs, reactive } from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
import { isExternal } from "@/utils/validate";
import AppLink from "./Link.vue";
import { join } from "@/utils/path";
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
  return join(basePath.value, routePath);
}
</script>

<style lang="scss">
.app_sidebar_item {
  position: relative;
  .el-badge {
    position: static;
    .el-badge__content {
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      &.is-dot {
        width: 6px;
        height: 6px;
        right: 30px;
      }
    }
  }
}
</style>
