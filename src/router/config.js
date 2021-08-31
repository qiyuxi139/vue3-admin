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
  if (token) {
    // 存在token
    if (to.path === "/login") {
      // 如果已经登录 不允许进入登录页
      next({ path: from.path });
      return;
    }
    // const hasRoles = store.getters.roles && store.getters.roles.length > 0;
    // // 判断是否获取了权限
    // if (hasRoles) {
    //   console.log("有权限了", router);
    //   next();
    // } else {
    //   // 没有就请求
    //   console.log("没有权限");
    //   try {
    //     await store.dispatch("permission/getRoles");
    //     next({ ...to, replace: true });
    //     window.router = router;
    //   } catch (error) {
    //     // 发生错误清空登录信息 跳往登录页
    //     message.error(error.message || "error");
    //     store.dispatch("user/logout");
    //     next(`/login?redirect=${to.path}`);
    //   }
    // }
    next();
  } else {
    // 不存在token
    if (whiteList.includes(to.path)) {
      next();
      return;
    }
    next(`/login?redirect=${to.path}`);
  }
}

export function handleAfterEach() {
  NProgress.done();
}
