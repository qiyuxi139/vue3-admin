<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in state.levelList" :key="item.path">
        <span v-if="item.redirect === 'noRedirect' || index == state.levelList.length - 1" class="no-redirect">
          {{ item.meta.title }}
        </span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import * as pathToRegexp from "path-to-regexp";
import { useRoute, useRouter } from "vue-router";
import { watchEffect, reactive } from "vue";
const route = useRoute();
const router = useRouter();
const state = reactive({
  levelList: null
});
watchEffect(() => {
  if (route.path.startsWith("/redirect/")) {
    return;
  }
  getBreadcrumb();
});

// 得到面包屑导航的层级
function getBreadcrumb() {
  let matched = route.matched.filter((item) => item.meta && item.meta.title);
  const first = matched[0];
  if (!isDashboard(first)) {
    matched = [{ path: "/", meta: { title: "首页" } }].concat(matched);
  }

  state.levelList = matched.filter((item) => item.meta && item.meta.title && item.meta.breadcrumb !== false);
}

// 是否是首页
function isDashboard(route) {
  const name = route && route.name;
  if (!name) {
    return false;
  }
  return name.trim().toLocaleLowerCase() === "index";
}

function handleLink(item) {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect);
    return;
  }

  router.push(pathCompile(path));
}

// 编译路径
function pathCompile(path) {
  const { params } = route;
  let toPath = pathToRegexp.compile(path);
  return toPath(params);
}

getBreadcrumb();
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .el-breadcrumb__inner a {
    font-size: 14px;
    font-weight: 400;
  }
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
