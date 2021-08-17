import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./routes";
import ElementPlus from "element-plus";
import "./assets/styles/index.scss"; // 引入自定义样式

const app = createApp(App);

// 仓库
app.use(store);

// 路由
app.use(router);

// element-ui
app.use(ElementPlus);

app.mount("#app");
