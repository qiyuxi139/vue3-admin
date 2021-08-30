import constantRoutes from "@/router/constantRoutes";
import asyncRoutes from "@/router/asyncRoutes";
import router from "@/router";
const state = {
  routes: constantRoutes,
  roles: [] // 用户权限列表
};

const mutations = {
  RESET_PERMISSION(state) {
    state.routes = constantRoutes;
    state.roles = [];
  },
  CHANGE_ROUTES(state, payload) {
    state.routes = payload;
  },
  ADD_ROUTES(state, payload) {
    state.routes = state.routes.concat(payload);
  },
  CHANGE_ROLES(state, payload) {
    state.roles = payload;
  }
};

const actions = {
  changeRoutes({ commit }, payload) {
    commit("CHANGE_ROUTES", payload);
  },
  addRoutes({ commit }, payload) {
    commit("ADD_ROUTES", payload);
  },
  changeRoles({ commit }, payload) {
    commit("CHANGE_ROLES", payload);
  },
  resetPermission({ commit }) {
    commit("RESET_PERMISSION");
  },
  // 获取权限
  async getRoles({ commit, dispatch }) {
    // 先重置在进行
    commit("RESET_PERMISSION");
    // const routes = [...asyncRoutes, { path: "/:a*", redirect: "/404", hidden: true }];
    commit("ADD_ROUTES", asyncRoutes);
    router.addRoutes(asyncRoutes);
    await dispatch("changeRoles", asyncRoutes);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
