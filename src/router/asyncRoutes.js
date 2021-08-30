import Layout from "@/layout/index.vue";
// 需要权限验证的路由
const asyncRoutes = [
  {
    id: "1",
    path: "/permission",
    component: Layout,
    redirect: "set",
    name: "Permission",
    meta: {
      icon: "lock",
      title: "权限相关"
    },
    children: [
      {
        id: "1_1",
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
    id: "2",
    path: "/item",
    component: Layout,
    meta: {
      title: "商品管理",
      icon: "arrow"
    },
    children: [
      {
        id: "2_1",
        path: "list",
        component: () => import("@/views/item/list.vue"),
        meta: {
          icon: "lock",
          title: "商品列表"
        }
      },
      {
        id: "2_2",
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
    id: "3",
    path: "/order",
    component: Layout,
    meta: {
      icon: "lock",
      title: "订单管理"
    },
    children: [
      {
        id: "3_1",
        path: "list",
        component: () => import("@/views/order/list.vue"),
        meta: {
          icon: "lock",
          title: "订单列表"
        }
      }
    ]
  }
];

asyncRoutes.push({ path: "/:a*", name: "AnyView", redirect: "/404", hidden: true });

export default asyncRoutes;
