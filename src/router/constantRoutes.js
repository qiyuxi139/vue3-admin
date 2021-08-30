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
    path: "/item",
    component: Layout,
    alwaysShow: true,
    name: "Item",
    meta: {
      icon: "item_management",
      title: "商品管理"
    },
    children: [
      {
        path: "itemLibrary",
        name: "itemLibrary",
        component: () => import("@/views/item/library.vue"),
        meta: {
          title: "商品库",
          icon: "item_lib"
        }
      }
    ]
  }
];
