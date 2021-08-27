import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import ElementPlus from "element-plus";
import router from "./router";
import "./assets/styles/index.scss"; // 引入自定义样式

const app = createApp(App);

app.use(store); // 仓库

app.use(ElementPlus); // element-ui

app.use(router); // 路由

store.dispatch("permission/getRoles").then(() => {
  app.mount("#app");
});
