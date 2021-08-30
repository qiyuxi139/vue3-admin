<template>
  <div class="permission">
    <el-tree
      ref="treeRefDom"
      :data="roles"
      node-key="id"
      :expand-on-click-node="false"
      show-checkbox
      default-expand-all
    >
      <!-- <template #default="{ node, data }"> -->
      <template #default="{ node }">
        <span class="custom-tree-node">
          <span>{{ node.data.meta && node.data.meta.title }}</span>
          <!-- <span @click="handleClick(node, data)">点击</span> -->
        </span>
      </template>
    </el-tree>
    <el-button @click="handleGet">Get</el-button>
    <el-button @click="handleSet">Set</el-button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const roles = computed(() => {
  const need = [...store.getters.roles];
  need.pop();
  return need;
});

const treeRefDom = ref(null);

// const handleClick = (node, data) => {
//   console.log(node, data);
// };

const handleGet = () => {
  console.log(treeRefDom);
  console.log(treeRefDom.value.getCheckedKeys());
};

const handleSet = () => {
  console.log(treeRefDom.value.setCheckedKeys(["2_1", "3", "3_1"]));
};
</script>

<style lang="scss"></style>
