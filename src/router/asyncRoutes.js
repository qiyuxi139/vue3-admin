import Layout from "@/layout/index.vue";
// 需要权限验证的路由
export default [
  {
    path: "/permission",
    component: Layout,
    redirect: "set",
    name: "Permission",
    children: [
      {
        path: "set",
        component: () => import("@/views/permission/set.vue"),
        name: "PermissionSet",
        meta: {
          icon: "lock",
          title: "权限设置页"
        }
      }
    ]
  },
  {
    path: "/item",
    component: Layout,
    meta: {
      title: "商品管理",
      icon: "arrow"
    },
    children: [
      {
        path: "list",
        component: () => import("@/views/item/list.vue"),
        meta: {
          icon: "lock",
          title: "商品列表"
        }
      },
      {
        path: "add",
        component: () => import("@/views/item/add.vue"),
        meta: {
          icon: "user",
          title: "商品添加"
        }
      }
    ]
  },
  {
    path: "/order",
    component: Layout,
    children: [
      {
        path: "list",
        component: () => import("@/views/order/list.vue"),
        meta: {
          icon: "lock",
          title: "商品列表"
        }
      }
    ]
  },
  {
    // eslint-disable-next-line prettier/prettier
    path: "/:a*",
    redirect: "/404",
    hidden: true
  }
];
