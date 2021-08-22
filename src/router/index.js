import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";
import { handleBeforeEach, handleAfterEach } from "./config";

export const routes = [
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
    path: "/menu1",
    component: Layout,
    redirect: "/menu1/test1",
    meta: {
      title: "菜单1",
      icon: "people"
    },
    children: [
      {
        path: "test1",
        component: () => import("@/views/test1.vue"),
        meta: {
          title: "测试1测试1测试1测试1",
          icon: "arrow"
        }
      },
      {
        path: "test2",
        component: () => import("@/views/test2.vue"),
        meta: {
          title: "测试2",
          icon: "arrow"
        }
      }
    ]
  },
  {
    path: "/one",
    component: Layout,
    redirect: "/one/test1",
    meta: {
      title: "测试1",
      breadcrumb: false,
      icon: "arrow"
    },
    children: [
      {
        path: "test1",
        component: () => import("@/views/test1.vue"),
        meta: {
          title: "测试1测试1测试1测试1测",
          icon: "arrow"
        }
      }
    ]
  },
  {
    path: "/one",
    component: Layout,
    redirect: "/one/test2",
    breadcrumb: false,
    meta: {
      title: "测试2测试2测试2测试2测试2",
      breadcrumb: false,
      icon: "arrow"
    },
    children: [
      {
        path: "test2",
        component: () => import("@/views/test2.vue"),
        meta: {
          title: "测试2",
          icon: "arrow"
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

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(handleBeforeEach);

router.afterEach(handleAfterEach);

export default router;
