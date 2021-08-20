<template>
  <div class="app-user-settings">
    <el-dropdown class="dropdown" trigger="click">
      <div class="avatar-wrapper">
        <span class="el-dropdown-link">下拉菜单<i class="el-icon-arrow-down el-icon--right"></i> </span>
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
function logout() {}
</script>

<style lang="scss">
.app-user-settings {
  .dropdown {
  }
}
</style>
