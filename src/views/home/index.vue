<template>
  <div class="homeWrap">
    <h1 style="text-align: center"></h1>
    <!-- <AcatarUploader @onDelete="handleDelete" @onSuccess="handleSuccess" :src="initImg" /> -->
    <div></div>
    <MUpload :initList="list" @on-delete="handleDelete" disabled />
    <el-button @click="changeImg">Change</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import AcatarUploader from "@/components/Upload/AcatarUploader.vue";
import MUpload from "@/components/Upload/multipleUpload.vue";

const list = [
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
  },
  {
    name: "img.jpeg",
    url: "https://youpik-dev.oss-cn-hangzhou.aliyuncs.com/system/20210824/2b0a8223509e41fa8785ddcd206cc452.jpeg"
  },
  {
    name: "fj1",
    url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile01.16sucai.com%2Fd%2Ffile%2F2011%2F1007%2F20111007124744976.jpg&refer=http%3A%2F%2Ffile01.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632384145&t=88ac510ad449037470102667e39c5ea0"
  },
  {
    name: "fj1",
    url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgaitaobao2.alicdn.com%2Ftfscom%2Fi3%2FTB1SB.pLXXXXXcBXVXXXXXXXXXX_%21%210-item_pic.jpg_300x300.jpg&refer=http%3A%2F%2Fgaitaobao2.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632384145&t=9c7bd11d6b5083c35d0f167718e6c31d"
  }
];

// const initImg = ref("https://img1.baidu.com/it/u=3102336817,2216289337&fm=26&fmt=auto&gp=0.jpg");

// const handleDelete = () => {
//   initImg.value = "";
// };

// const handleSuccess = (res) => {
//   initImg.value = res.result;
// };

const changeImg = () => {
  list.value = [
    {
      name: "food.jpeg",
      url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
    },
    {
      name: "img.jpeg",
      url: "https://youpik-dev.oss-cn-hangzhou.aliyuncs.com/system/20210824/2b0a8223509e41fa8785ddcd206cc452.jpeg"
    },
    {
      name: "fj1",
      url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile01.16sucai.com%2Fd%2Ffile%2F2011%2F1007%2F20111007124744976.jpg&refer=http%3A%2F%2Ffile01.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632384145&t=88ac510ad449037470102667e39c5ea0"
    }
  ];
  // initImg.value =
  //   "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fmobile%2F2020-06-17%2F5ee9bfcb4ca0e.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632365485&t=0bc0fc201a6991ee44b3848f2741522c";
};

const handleDelete = (file, fileList) => {
  console.log(fileList, "delete");
};
</script>
