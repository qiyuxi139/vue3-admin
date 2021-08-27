import Layout from "@/layout/index.vue";
// 不需要权限验证的路由
export default [
  {
    path: "/",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "",
        name: "Index",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页"
        }
      }
    ]
  },
  {
    path: "/user",
    component: Layout,
    alwaysShow: true,
    meta: {
      icon: "people",
      title: "用户中心"
    },
    children: [
      {
        path: "set",
        name: "UserSet",
        component: () => import("@/views/user/set.vue"),
        meta: {
          title: "账户设置"
        }
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    hidden: true
  },
  {
    path: "/401",
    name: "NoPermission",
    component: () => import("@/views/401/index.vue"),
    hidden: true
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("@/views/404/index.vue"),
    hidden: true
  }
];
