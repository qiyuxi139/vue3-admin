<template>
  <el-upload
    :class="{ mulitipUpload: true, disabled: mDisabled }"
    :disabled="mDisabled"
    :action="config.action"
    :headers="config.handers"
    :name="config.name"
    :limit="limit"
    :multiple="limit.length > 1"
    :accept="accept"
    :list-type="listType"
    :before-upload="beforeUpload"
    :on-preview="handlePreview"
    :on-success="handleSuccess"
    :on-error="handleError"
    :on-remove="handleRemove"
    :on-exceed="handleExceed"
    :file-list="cList"
  >
    <el-button v-if="type === 'button'" type="primary">点击上传</el-button>
    <i v-else class="el-icon-plus" />
  </el-upload>
  <el-dialog v-model="dialogPreview" custom-class="previewDialog">
    <img style="width: 100%" :src="imgSrc" alt="" class="img" />
  </el-dialog>
</template>

<script setup>
import { ref, toRefs, computed, watchEffect, unref } from "vue";
import { ElMessage } from "element-plus";

const props = defineProps({
  limit: {
    type: Number,
    default: 4
  },
  initList: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: "jpg,jpeg,png,gif"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  listType: {
    type: String,
    default: "picture-card" // text/picture/picture-card
  },
  type: {
    type: String,
    default: "button"
  }
});
const { limit, initList, disabled, accept, listType, type } = toRefs(props);

const emit = defineEmits(["on-delete", "on-success", "on-error"]);

const config = {
  action: "http://youpik.api.catike.com/api-base/upload/uploadFile",
  name: "file",
  headers: {}
};
const cList = ref([]);
const dialogPreview = ref(false);
const imgSrc = ref(false);
const mDisabled = computed(() => {
  return disabled.value;
});
watchEffect(() => {
  cList.value = unref(initList);
});
const beforeUpload = () => {
  return true;
};

const handleSuccess = (res, file, fileList) => {
  const list = fileList.map((it) => ({
    ...it,
    url: it.response ? it.response.result : it.url
  }));
  emit("on-success", res, file, list);
};

const handleError = (err, file, fileList) => {
  emit("on-error", err, file, fileList);
};

const handlePreview = (file) => {
  dialogPreview.value = true;
  imgSrc.value = file.url;
};

const handleExceed = (file, fileList) => {
  ElMessage.info(`已选择数量${fileList.length}，超出上传限制${limit.value}!`);
};

const handleRemove = (file, fileList) => {
  emit("on-delete", file, fileList);
};
</script>

<style lang="scss">
.mulitipUpload {
  &.disabled {
    .el-upload {
      display: none;
    }
  }
  .el-upload-list__item-status-label {
    display: none !important;
  }
}
</style>
