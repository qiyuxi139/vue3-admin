// import Layout from "@/layout/index.vue";
// 需要权限验证的路由
const asyncRoutes = [
  // {
  // id: "1",
  // path: "/permission",
  // component: Layout,
  // redirect: "set",
  // name: "Permission",
  // meta: {
  //   icon: "lock",
  //   title: "权限相关"
  // },
  // children: [
  //   {
  //     id: "1_1",
  //     path: "set",
  //     component: () => import("@/views/permission/set.vue"),
  //     name: "PermissionSet",
  //     meta: {
  //       icon: "lock",
  //       title: "权限设置页"
  //     }
  //   }
  // ]
  // }
];

asyncRoutes.push({ path: "/:a*", name: "AnyView", redirect: "/404", hidden: true });

export default asyncRoutes;
