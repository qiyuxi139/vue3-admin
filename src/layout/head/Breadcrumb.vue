<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in state.levelList" :key="item.path">
        <span
          v-if="item.redirect === 'noRedirect' || index == state.levelList.length - 1"
          class="no-redirect"
        >
          {{ item.meta.title }}
        </span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { watchEffect, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import * as pathToRegexp from "path-to-regexp";
import { getRouteById } from "@/utils/router";

const route = useRoute();
const router = useRouter();
const store = useStore();

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
  state.levelList = getAllMatchedList(matched);
}

// 是否是首页
function isDashboard(route) {
  const name = route && route.name;
  if (!name) {
    return false;
  }
  return name.trim().toLocaleLowerCase() === "index";
}

function getAllMatchedList(matched) {
  const filterMatched = matched.filter(
    (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
  );
  // 查找有parentId或parent的路由 并添加到面包屑列表中
  function _getAllMatchedList(_matched) {
    const allList = [];
    _matched.forEach((it) => {
      const { meta } = it;
      if (!meta) {
        return allList.push(it);
      }
      const { parent, parentId } = meta;
      if (parentId) {
        const route = getRouteById(store.getters.routes, parentId);
        const resolveRoute = router.resolve(route);
        if (!route) {
          throw new Error("路由列表中没有对应ID的路由信息");
        }
        const { meta: parentMeta } = route;
        if (parentMeta && parentMeta.title) {
          allList.push({
            path: resolveRoute.path,
            meta: parentMeta
          });
        }
      } else if (parent) {
        allList.push({
          path: parent.path,
          meta: {
            title: parent.title
          }
        });
      }
      allList.push(it);
    });
    return allList;
  }
  return _getAllMatchedList(filterMatched);
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
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all 0.3s;
  }

  .breadcrumb-enter,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(50%);
  }

  .breadcrumb-move {
    transition: all 0.3s;
  }

  .breadcrumb-leave-active {
    position: absolute;
  }
}
</style>
