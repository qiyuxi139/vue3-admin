<template>
  <Upload
    :src="props.modelValue"
    :disabled="props.disabled"
    :accept="props.accept"
    @on-success="handleSuccess"
    @on-delete="handleDelete"
    @on-error="handleError"
  />
</template>

<script setup>
import Upload from "../Upload/SingleUpload.vue";
import message from "@/utils/reset/mElMessage";

const props = defineProps({
  modelValue: String,
  disabled: {
    type: Boolean,
    default: false
  },
  accept: {
    type: String,
    default: "jpg,jpeg,png,gif"
  }
});

const emit = defineEmits(["update:modelValue"]);

const handleSuccess = (res) => {
  emit("update:modelValue", res.result);
};

const handleDelete = () => {
  emit("update:modelValue", "");
};

const handleError = (error) => {
  message.error(error.message);
};
</script>

<style lang="scss"></style>
