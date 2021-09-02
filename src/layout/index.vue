<template>
  <div class="app-wrapper" :class="{ hideSidebar: sidebarFold }">
    <el-container>
      <el-aside class="side-wrapper" :class="{ collapse: sidebarFold }">
        <AppSlide />
      </el-aside>
      <el-container class="right-wrapper">
        <el-affix
          v-if="fixedHead"
          :offset="0"
          @change="handleAffixChange"
          :class="{ isFixed: headFixed }"
        >
          <el-header class="head-wrapper">
            <AppHead />
          </el-header>
        </el-affix>
        <el-header v-else class="head-wrapper">
          <AppHead />
        </el-header>
        <el-main :class="{ 'main-wrapper': true, headFixed: headFixed }">
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import AppHead from "./head/index.vue";
import AppMain from "./main/index.vue";
import AppSlide from "./sidebar/index.vue";
import useSidebarFold from "./hooks/useSidebarFold";

const store = useStore();

const fixedHead = computed(() => store.getters.fixedHead);

const headFixed = ref(false);
const sidebarFold = useSidebarFold();

const handleAffixChange = (bool) => {
  headFixed.value = bool;
};
</script>
