import { getToken, setToken, removeToken } from "@/utils/auth";
const state = {
  token: getToken() || null
};

const mutations = {
  CHANGE_TOKEN(state, token) {
    state.token = token;
  }
};

const actions = {
  changeToken({ commit }, token) {
    if (!token) {
      // 表示清空token
      removeToken();
      commit("CHANGE_TOKEN", null);
    } else {
      setToken(token);
      commit("CHANGE_TOKEN", token);
    }
  },
  async login({ dispatch }, payload) {
    const { username, password } = payload;
    // 假登录
    if (username === "admin" && password === "123") {
      // 获取用户权限
      await dispatch("changeToken", Math.random().toString(16).slice(2));
      return true;
      // getRedirect();
    }
    return false;
  },
  async logout({ dispatch }) {
    await dispatch("changeToken", null);
    await dispatch("permission/resetPermission", null, { root: true });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
