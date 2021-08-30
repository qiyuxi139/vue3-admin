import { createRouter, createWebHistory } from "vue-router";
import { handleBeforeEach, handleAfterEach } from "./config";
import constantRoutes from "./constantRoutes";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
});

router.beforeEach(handleBeforeEach);

router.afterEach(handleAfterEach);

router.addRoutes = (routes) => {
  const len = routes.length;
  for (let i = 0; i < len; i++) {
    const route = routes[i];
    router.addRoute(route);
  }
};

export default router;
