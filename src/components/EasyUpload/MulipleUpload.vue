<template>
  <Upload
    @on-success="handleSuccess"
    @on-delete="handleDelete"
    @on-error="handleError"
    :limit="props.limit"
    :init-list="cloneValue"
    :disabled="props.disabled"
    :accept="props.accept"
    :listType="props.listType"
  />
</template>

<script setup>
import Upload from "../Upload/MultipleUpload.vue";
import message from "@/utils/reset/mElMessage";
import { cloneDeepWith } from "lodash";

const props = defineProps({
  modelValue: {
    type: Array,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  accept: {
    type: String,
    default: "jpg,jpeg,png,gif"
  },
  limit: {
    type: Number,
    default: 4
  },
  listType: {
    type: String,
    default: "picture-card" // text/picture/picture-card
  }
});

const cloneValue = cloneDeepWith(props.modelValue);

const emit = defineEmits(["update:modelValue"]);

const handleSuccess = (res, file, list) => {
  emit("update:modelValue", list);
};

const handleDelete = (file, fileList) => {
  emit("update:modelValue", fileList);
};

const handleError = (error) => {
  message.error(error.message);
};
</script>

<style lang="scss"></style>
