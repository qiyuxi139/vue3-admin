<template>
  <div class="head-content">
    <div class="left">
      <div class="sidebarControlWrap" @click="handleSwitchSidebarStatus">
        <i v-if="sidebarFold" class="el-icon-s-unfold control" />
        <i v-else class="el-icon-s-fold control" />
      </div>
      <Breadcrumb />
    </div>
    <div class="right">
      <Screenfull class="screenfullControl" />
      <UserSettings class="userSettingsControl" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import useSidebarFold from "../hooks/useSidebarFold";
import Breadcrumb from "./Breadcrumb.vue";
import UserSettings from "./UserSettings.vue";
import Screenfull from "@/components/Screenfull/index.vue";

const store = useStore();

const sidebarFold = useSidebarFold();

function handleSwitchSidebarStatus() {
  store.dispatch("settings/changeSidebarFold", !sidebarFold.value);
}
</script>
