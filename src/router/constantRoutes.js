import Layout from "@/layout/index.vue";
// 不需要权限验证的路由
export default [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "Index",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          icon: "home"
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
  },
  {
    path: "/list",
    component: Layout,
    name: "List",
    alwaysShow: true,
    id: 2,
    meta: {
      title: "测试",
      icon: "list"
    },
    children: [
      {
        path: "mock",
        name: "ListIndex",
        id: 1,
        component: () => import("@/views/list/list.vue"),
        meta: {
          icon: "list",
          title: "列表"
        }
      }
    ]
  }
];
