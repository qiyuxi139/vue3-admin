import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import ElementPlus, { ElLoading } from "element-plus";
import router from "./router";
import message from "@/utils/reset/mElMessage";
import { getToken } from "@/utils/auth";
import "./assets/styles/index.scss"; // 引入自定义样式

const app = createApp(App);

async function mount() {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  try {
    if (getToken()) {
      await store.dispatch("permission/getRoles");
    }
  } catch (error) {
    message.error(error.message || "未知错误!");
  } finally {
    app
      .use(router)
      .use(store)
      .use(ElementPlus, {
        size: "medium"
      })
      .mount("#app");
  }
  loading.close();
}

// 错误处理
app.config.errorHandler = (msg, vm, trace) => {
  console.log(msg.message, vm, trace);
};

mount();
