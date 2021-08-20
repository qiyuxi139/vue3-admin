<template>
  <div class="app-wrapper" :class="{ hideSidebar: sidebarFold }">
    <el-container>
      <el-aside class="side-wrapper" :class="{ collapse: sidebarFold }">
        <AppSlide />
      </el-aside>
      <el-container class="right-wrapper">
        <el-header class="head-wrapper">
          <AppHead />
        </el-header>
        <el-main class="main-wrapper">
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import AppHead from "./head/index.vue";
import AppMain from "./main/index.vue";
import AppSlide from "./sidebar/index.vue";
import useSidebarFold from "./hooks/useSidebarFold";

const sidebarFold = useSidebarFold();
</script>
