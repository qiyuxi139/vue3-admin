<template>
  <div @click="handleSwitchSidebarStatus">
    <i v-if="sidebarFold" class="el-icon-s-unfold control" />
    <i v-else class="el-icon-s-fold control" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import useSidebarFold from "../hooks/useSidebarFold";
const store = useStore();

const sidebarFold = useSidebarFold();
function handleSwitchSidebarStatus() {
  store.dispatch("settings/changeSidebarFold", !sidebarFold.value);
}
</script>

<style lang="scss"></style>
