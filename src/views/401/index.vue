<template>
  <div class="app-not-401">
    <el-button icon="el-icon-arrow-left" class="pan-back-btn" @click="back"> 返回 </el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">Oops!</h1>
        <h2>你没有权限去该页面</h2>
        <h6>如有不满请联系你领导</h6>
        <ul class="list-unstyled">
          <li>或者你可以去:</li>
          <li class="link-type">
            <router-link to="/"> 回首页 </router-link>
          </li>
          <li class="link-type">
            <router-link to="/"> 随便看看 </router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">
        <img :src="state.errGif" width="313" height="428" alt="Girl has dropped her ice cream." />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import eGif from "@/assets/images/error-page/401.gif";

const router = useRouter();

const state = reactive({
  errGif: eGif + "?" + +new Date(),
  dialogVisible: false
});

const back = () => {
  router.push("/");
};
</script>

<style lang="scss">
.app-not-401 {
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  padding: 100px 0;
  .pan-back-btn {
    background: #008489;
    color: #fff;
    border: none !important;
  }
  .pan-gif {
    margin: 0 auto;
    display: block;
  }
  .pan-img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }
  .list-unstyled {
    font-size: 14px;
    li {
      padding-bottom: 5px;
    }
    a {
      color: #008489;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
