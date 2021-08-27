<template>
  <el-scrollbar class="side-scrollbar">
    <el-menu class="menu-item-wrapper" :collapse="sidebarFold" :default-active="route.path">
      <SidebarItem v-for="item in routes" :key="item.path" :item="item" :basePath="item.path" />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import SidebarItem from "./SidebarItem.vue";
import useSidebarFold from "../hooks/useSidebarFold";

const sidebarFold = useSidebarFold();

const route = useRoute();
const store = useStore();

const routes = computed(() => store.getters.routes);
console.log(routes);
</script>
