import constantRoutes from "@/router/constantRoutes";
import asyncRoutes from "@/router/asyncRoutes";
import router from "@/router";
const state = {
  routes: constantRoutes,
  role: [] // 用户权限列表
};

const mutations = {
  CHANGE_ROUTES(state, payload) {
    state.routes = payload;
  },
  ADD_ROUTES(state, payload) {
    state.routes = state.routes.concat(payload);
    console.log(state.routes, payload);
  }
};

const actions = {
  changeRoutes({ commit }, payload) {
    commit("CHANGE_ROUTES", payload);
  },
  addRoutes({ commit }, payload) {
    commit("ADD_ROUTES", payload);
  },
  // 获取权限
  getRoles({ commit }) {
    router.addRoutes(asyncRoutes);
    commit("ADD_ROUTES", asyncRoutes);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
