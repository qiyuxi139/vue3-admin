<template>
  <el-upload
    :class="{ 'avatar-uploader': true, disabled: disabled }"
    :action="actionRef"
    :show-file-list="false"
    :disabled="disabled"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="disabled" :src="imgUrlRef" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    <div class="actions" v-if="disabled">
      <div class="iconWrap">
        <i class="el-icon-download" @click="handleDownload" />
        <i class="el-icon-delete" @click="handleDelete" />
      </div>
    </div>
  </el-upload>
</template>

<script setup>
import { ref, toRefs, computed, defineEmits } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

// eslint-disable-next-line no-undef
const props = defineProps({
  initImageUrl: {
    type: String,
    default: ""
  }
});

const emit = defineEmits(["on-delete", "on-success"]);

const actionRef = ref("https://jsonplaceholder.typicode.com/posts/");
const imgUrlRef = ref(null);

const disabled = computed(() => {
  const result = !!imgUrlRef.value;
  console.log(result);
  return result;
});

// 初始化
const init = () => {
  const { initImageUrl } = toRefs(props);
  if (initImageUrl.value) {
    imgUrlRef.value = initImageUrl.value;
  }
};
init();

const handleAvatarSuccess = (res, file) => {
  imgUrlRef.value = URL.createObjectURL(file.raw);
  emit("on-success", res);
};
const beforeAvatarUpload = (file) => {
  console.log(file, "beforeAvatarUpload");
  return true;
};

const handleDelete = (e) => {
  ElMessageBox.confirm("是否删除?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      imgUrlRef.value = null;
      e.preventDefault();
      ElMessage({
        type: "success",
        message: "删除成功!"
      });
      emit("on-delete");
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "已取消删除!"
      });
    });
};

const handleDownload = () => {};
</script>

<style lang="scss">
.avatar-uploader {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover {
      border-color: #409eff;
      .actions {
        display: block;
      }
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .actions {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: none;
      transition: 0.3s;
      .iconWrap {
        position: absolute;
        z-index: 9;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #fbfbfb;
        font-size: 20px;
        i {
          margin: 0px 8px;
        }
      }
    }
  }

  &.disabled {
    .el-upload {
      &:hover {
        border-color: #d9d9d9;
      }
    }
  }
}
</style>
