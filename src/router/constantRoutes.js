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
    redirect: "noRedirect",
    meta: {
      title: "测试",
      icon: "list"
    },
    children: [
      {
        path: "test",
        name: "ListIndex",
        isDot: false,
        component: () => import("@/layout/router-view.vue"),
        redirect: "noRedirect",
        meta: {
          icon: "list",
          title: "列表2"
        },
        alwaysShow: true,
        children: [
          {
            path: "mock",
            name: "List3",
            id: 1,
            isDot: false,
            component: () => import("@/views/list/list.vue"),
            meta: {
              icon: "list",
              title: "列表3"
            }
          },
          {
            path: "mock/detail/:id",
            name: "ListDetail",
            hidden: true,
            component: () => import("@/views/list/detail.vue"),
            meta: {
              parent: {
                path: "/list/test/mock",
                title: "列表3"
              },
              parentId: 1,
              icon: "list",
              title: "列表详情页"
            }
          },
          {
            path: "view1",
            name: "View1",
            isDot: false,
            component: () => import("@/views/list/view1.vue"),
            meta: {
              icon: "list",
              title: "页面1"
            }
          }
        ]
      }
    ]
  }
];
