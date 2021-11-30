import constantRoutes from "@/router/constantRoutes";
import asyncRoutes from "@/router/asyncRoutes";
import router from "@/router";
import { type } from "@/utils/common";
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
  },
  CHANGE_SIDEBAR_STATUS(state, { actions } = {}) {
    // 该数组每一项表示目标在routes中的位置
    actions.forEach((it) => changeSidebarStatus(state.routes, it));
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

function changeSidebarStatus(routes, route) {
  let arr = [];
  function _change(_routes, _route) {
    if (type(_routes) !== "array") {
      return;
    }
    _routes.forEach((it, i) => {
      arr.push(i);
      if (it.id === _route.id) {
        // const { payload } = route;
        // Object.keys(payload).forEach((key) => {
        //   it[key] = payload[key];
        // });
        console.log(it);
        return;
      }
      arr.push("children");
      _change(it.children, _route);
    });
  }
  _change(routes, route);
  console.log(arr);
}
