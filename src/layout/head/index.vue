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
      <MSelect :langs="langs" :select="select" @onChange="handleChange" />
      <UserSettings class="userSettingsControl" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import useSidebarFold from "../hooks/useSidebarFold";
import MSelect from "@/components/Select/index.vue";
import Breadcrumb from "./Breadcrumb.vue";
import UserSettings from "./UserSettings.vue";
import Screenfull from "@/components/Screenfull/index.vue";
import useLocale from "@/hooks/useLocale";

const store = useStore();

const sidebarFold = useSidebarFold();
function handleSwitchSidebarStatus() {
  store.dispatch("settings/changeSidebarFold", !sidebarFold.value);
}

const langs = [
  { command: "zh", name: "中文" },
  { command: "en", name: "English" }
];
const select = ref("zh");
const { setLocale } = useLocale();
const handleChange = (command) => {
  setLocale(command);
  select.value = command;
};
</script>
