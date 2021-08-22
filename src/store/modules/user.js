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
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
