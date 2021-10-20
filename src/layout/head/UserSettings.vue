<template>
  <div class="app-user-settings">
    <el-dropdown class="dropdown" trigger="click">
      <div class="avatar-wrapper">
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right" />
        </span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <router-link to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click="logout">
            <span style="display: block">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();

async function logout() {
  const { path } = route;
  await store.dispatch("user/logout");
  router.replace({
    path: "/login",
    query: {
      redirect: window.encodeURIComponent(path)
    }
  });
}
</script>

<style lang="scss">
// .app-user-settings {
//   .dropdown {
//   }
// }
</style>
