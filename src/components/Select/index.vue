<template>
  <el-dropdown trigger="click" class="international" @command="handleChange">
    <div><SvgIcon icon="language" class="international-icon" /></div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="it in props.langs"
          :key="it.command"
          :command="it.command"
          :disabled="props.select === it.command"
        >
          {{ it.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon/index.vue";

const props = defineProps({
  langs: {
    type: Array,
    default: () => []
  },
  select: {
    type: String,
    default: ""
  }
});

const emit = defineEmits(["on-change"]);

const handleChange = (command) => {
  emit("on-change", command);
};
</script>

<style scoped>
.international-icon {
  font-size: 20px;
  cursor: pointer;
  vertical-align: -5px !important;
}
</style>
