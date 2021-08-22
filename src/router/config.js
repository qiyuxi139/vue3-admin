import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "@/utils/auth";

NProgress.configure({
  showSpinner: false
});

// 不需要验证的白名单
const whiteList = ["/login"];

export function handleBeforeEach(to, from, next) {
  NProgress.start();
  const token = getToken();
  // 不存在token
  if (!token) {
    if (whiteList.includes(to.path)) {
      next();
      return;
    }
    next({ path: "/login" });
  } else {
    // 存在token
    if (to.path === "/login") {
      // 如果已经登录 不允许进入登录页
      next({ path: from.path });
      return;
    }
    next();
  }
}

export function handleAfterEach() {
  NProgress.done();
}
