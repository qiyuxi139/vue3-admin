<template>
  <div class="app-login">
    <h2 class="title">后台管理登录</h2>
    <el-form
      :model="loginForm"
      :rules="loginFormRules"
      ref="loginFormDomRef"
      label-width="0px"
      class="loginForm"
    >
      <el-form-item prop="username">
        <span class="prefixIcon">
          <SvgIcon icon="user" />
        </span>
        <el-input v-model="loginForm.username" class="inputItem" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="prefixIcon">
          <SvgIcon icon="lock" />
        </span>
        <el-input
          v-model="loginForm.password"
          class="inputItem"
          :type="pwdVisibleRef ? 'text' : 'password'"
          placeholder="请输入密码"
          @keyup.enter="handleLogin"
        />
        <span class="afterFixIcon">
          <SvgIcon
            :icon="pwdVisibleRef ? 'eye-display' : 'eye-hide'"
            @click="handleSwitchVisible"
          />
        </span>
      </el-form-item>
      <el-form-item label-width="0px">
        <el-button type="primary" :loading="islogingRef" class="loginBtn" @click="handleLogin">
          {{ islogingRef ? "登录中..." : "登录" }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref, unref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import message from "@/utils/reset/mElMessage";
import SvgIcon from "@/components/SvgIcon/index.vue";

const router = useRouter();
const route = useRoute();
const store = useStore();

const loginForm = reactive({
  username: "",
  password: ""
});
const loginFormDomRef = ref(null);
const loginFormRules = {
  username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
  password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
};

// 处理密码是否可见
const pwdVisibleRef = ref(false);
function handleSwitchVisible() {
  pwdVisibleRef.value = !pwdVisibleRef.value;
}

// 登录处理
const islogingRef = ref(false);
function handleLogin() {
  try {
    islogingRef.value = true;
    const form = unref(loginFormDomRef);
    if (!form) {
      return;
    }
    form.validate(async (res) => {
      if (!res) {
        return;
      }
      const { username, password } = loginForm;
      const result = await store.dispatch("user/login", { username, password });
      if (result) {
        await store.dispatch("permission/getRoles"); // 获取sidebar权限
        getRedirect();
        message.success("登录成功!");
      } else {
        message.error("账号或密码错误! 请重新输入");
      }
    });
  } catch (error) {
    message.error(error.message);
  } finally {
    islogingRef.value = false;
  }
}
// 重定向到指定页面
function getRedirect() {
  const redirect = route.query.redirect;
  const toPath = redirect ? redirect : "/";
  router.replace(toPath);
}
</script>

<style lang="scss">
@mixin loginSvg {
  font-size: 14px;
  color: #888;
}

@mixin iconWrap {
  width: 32px;
  text-align: center;
  line-height: 40px;
  z-index: 9;
}

.app-login {
  width: 420px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .title {
    position: absolute;
    top: -80px;
    left: 0px;
    right: 0;
    color: #666;
    font-size: 26px;
    font-weight: 700;
    padding: 0;
    text-align: center;
  }
  .loginBtn {
    width: 100%;
  }
  .el-form-item__content {
    position: relative;
    .prefixIcon {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      @include iconWrap;
      svg {
        @include loginSvg;
      }
    }
    .afterFixIcon {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      @include iconWrap;
      svg {
        @include loginSvg;
        cursor: pointer;
      }
    }
    .inputItem input {
      padding: 0 32px;
      font-size: 14px;
    }
  }
}
</style>
