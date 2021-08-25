import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ElementPlus from "element-plus";
import locale from "element-plus/es/locale/lang/zh-cn";
import "./assets/styles/index.scss"; // 引入自定义样式

const app = createApp(App);

app.use(store); // 仓库

app.use(router); // 路由

app.use(ElementPlus, {
  locale
}); // element-ui

app.mount("#app");
