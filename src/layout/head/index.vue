<template>
  <div class="head-content">
    <div class="left">
      <SidebarControl class="sidebarControlWrap" />
      <Breadcrumb />
    </div>
    <div class="right">
      <Screenfull class="screenfullControl" />
      <LangSelect class="langControl" />
      <UserSettings class="userSettingsControl" />
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from "./Breadcrumb.vue";
import UserSettings from "./UserSettings.vue";
import Screenfull from "@/components/Screenfull/index.vue";
import LangSelect from "./LangSelect.vue";
import SidebarControl from "./SidebarControl.vue";
</script>
