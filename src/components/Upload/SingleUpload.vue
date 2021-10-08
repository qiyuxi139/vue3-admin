<template>
  <el-upload
    :class="{ 'avatar-uploader': true, disabled: disabled }"
    :action="config.action"
    :headers="config.headers"
    :name="config.name"
    :accept="accept"
    :show-file-list="false"
    :disabled="mDisabled"
    :on-success="handleSuccess"
    :on-error="handleError"
    :on-progress="handleProcess"
    :before-upload="beforeUpload"
  >
    <template v-if="!isUpload">
      <img v-if="mDisabled" :src="src" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon" />
      <div class="actions" v-if="mDisabled">
        <div class="iconWrap">
          <i class="el-icon-zoom-in" @click="handlePreview" />
          <i class="el-icon-download" @click="handleDownload" />
          <i class="el-icon-delete" v-if="!disabled" @click="handleDelete" />
        </div>
      </div>
    </template>
    <el-progress
      v-else
      type="circle"
      :percentage="percentage"
      :status="percentage === 100 ? 'success' : ''"
    />
  </el-upload>
  <el-dialog v-model="dialogPreview" custom-class="previewDialog">
    <img :src="src" alt="" class="img" />
  </el-dialog>
</template>

<script setup>
import { ref, toRefs, computed } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import fileUtils from "@/utils/file";

const props = defineProps({
  src: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  accept: {
    type: String,
    default: "jpg,jpeg,png,gif"
  }
});

const { src, disabled, accept } = toRefs(props);
const dialogPreview = ref(false);
const percentage = ref(0); // 进度条
const isUpload = ref(false); // 是否正在上传
const config = {
  action: "http://youpik.api.catike.com/api-base/upload/uploadFile",
  name: "file",
  headers: {}
};

const emit = defineEmits(["on-delete", "on-success", "on-error"]);

const mDisabled = computed(() => {
  return !!src.value || isUpload.value || disabled.value;
});

const beforeUpload = (file) => {
  const curSize = file.size / 1024 / 1024;
  const limit = 20;
  if (curSize > limit) {
    ElMessage.info(`当前文件大小为${curSize}M, 超过${limit}M`);
    return false;
  }
  return new Promise((resolve) => {
    fileUtils.getOrientation(file).then((orient) => {
      // orient为通过exif.js拿到的图片的Orientaion
      if (orient && orient === 6 && !this.$store.getters.rotation) {
        const reader = new FileReader();
        const img = new Image();
        reader.onload = (e) => {
          img.src = e.target.result;
          img.onload = function () {
            const data = fileUtils.rotateImage(img, img.width, img.height);
            // 通过画布将图片宽给其高，高给其宽，并顺时针旋转90度，返回一个包含图片展示的 data URI 。可以使用 type 参数其类型，默认为 PNG 格式。
            const newFile = fileUtils.dataURLtoFile(data, file.name);
            // 通过传入新的data URI，返回一个新的file对象。
            resolve(newFile);
          };
        };
        reader.readAsDataURL(file);
        // 该方法会读取指定的 Blob 或 File 对象。读取操作完成的时候，触发 onload 事件，同时 result 属性将包含一个data:URL格式的字符串（base64编码）以表示所读取文件的内容。
      } else {
        resolve(file);
      }
    });
  });
};

const handleProcess = (event, file) => {
  isUpload.value = true;
  percentage.value = 0;
  if (file.status === "ready") {
    const timer = setInterval(() => {
      if (percentage.value < 75) {
        percentage.value = percentage.value + 1;
      }
      if (["success", "fail"].includes(file.status)) {
        clearInterval(timer);
      }
    }, 1000 / 60);
  }
};

const handleSuccess = (res, file) => {
  percentage.value = 100;
  isUpload.value = false;
  ElMessage.success("上传成功!");
  emit("on-success", res, file);
};

const handleError = (error, file) => {
  isUpload.value = false;
  emit("on-error", error, file);
  ElMessage.error("上传失败!");
};

const handleDelete = () => {
  ElMessageBox.confirm("是否删除?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      ElMessage.success("删除成功!");
      emit("on-delete");
    })
    .catch(() => {
      ElMessage.info("已取消删除!");
    });
};

const handleDownload = () => {
  window.open(src.value, "_blank");
};

const handlePreview = () => {
  dialogPreview.value = !dialogPreview.value;
};
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
        white-space: nowrap;
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
.previewDialog {
  .el-dialog__body .img {
    width: 100%;
  }
}
</style>
