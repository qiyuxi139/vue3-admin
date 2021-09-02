<template>
  <el-date-picker
    v-model="range"
    :type="detail ? 'datetimerange' : 'daterange'"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :default-time="defaultTime"
    :disabled="disabled"
    :disabledDate="disabledDate"
    @change="handleChange"
  >
  </el-date-picker>
</template>

<script setup>
import { ref, toRefs } from "vue";

const props = defineProps({
  modelValue: Object,
  disabled: {
    type: Boolean,
    default: false
  },
  detail: {
    type: Boolean,
    default: false
  },
  defaultTime: {
    type: Array,
    default: () => [new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59)]
  },
  timeStamp: {
    type: Boolean,
    default: true
  },
  disabledDate: {
    type: Function,
    default: () => false
  }
});

const { disabled, detail, timeStamp } = toRefs(props);

const emit = defineEmits(["change", "update:modelValue"]);

const range = ref([]);

const handleChange = (val) => {
  let result = val;
  if (result && result.length > 0 && timeStamp.value) {
    // 显示时间戳而不是日期对象
    result = result.map((it) => +it);
  }
  emit("update:modelValue", result);
  emit("change", result);
};
</script>

<style lang="scss"></style>
