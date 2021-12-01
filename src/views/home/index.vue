<template>
  <div class="homeWrap">
    <el-button @click="handleChangeMenuStatus">菜单栏状态改变</el-button>
  </div>
</template>

<script setup>
import { nextTick, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

const handleChangeMenuStatus = () => {
  test();
  // nextTick(() => {
  //   console.log(store.getters.routes[0]);
  // });
};

onMounted(() => {});

const test = () => {
  nextTick(() => {
    store.commit("permission/CHANGE_SIDEBAR_STATUS", {
      actions: [{ id: 1, payload: { isDot: true } }]
    });
  });
};
</script>
