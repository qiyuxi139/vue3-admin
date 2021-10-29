import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "@/utils/auth";
// import store from "@/store";
// import router from "@/router";
// import message from "@/utils/reset/mElMessage";

NProgress.configure({
  showSpinner: false
});

// 不需要验证的白名单
const whiteList = ["/login"];

export async function handleBeforeEach(to, from, next) {
  NProgress.start();
  const token = getToken();
  if (window.document) {
    const title = to.meta && to.meta.title;
    document.title = `${title || ""}${title ? " - " : ""}后台管理系统`;
  }
  if (token) {
    // 存在token
    if (to.path === "/login") {
      // 如果已经登录 不允许进入登录页
      next({ path: from.path });
      return;
    }
    next();
  } else {
    // 不存在token
    if (whiteList.includes(to.path)) {
      next();
      return;
    }
    if (to.path !== "/login") {
      next("/login");
      return;
    }
    next(false);
  }
}

export function handleAfterEach() {
  NProgress.done();
}
