import { mHasOwnProperty } from "@/utils/common";
import Cookies from "js-cookie";

export const SIDEBAR_STATUS_KEY = "SIDEBAR_STATUS_KEY";
window.mCookies = Cookies;

const state = {
  sidebarFold: !!+Cookies.get(SIDEBAR_STATUS_KEY)
};

const mutations = {
  CHANGE_SETTINGS(state, { key, value }) {
    if (mHasOwnProperty(state, key)) {
      state[key] = value;
    }
  },
  CHNAGE_SIDEBAR_FOLD(state, bool) {
    state.sidebarFold = bool;
  }
};

const actions = {
  changeSettings({ commit }, payload) {
    commit("CHANGE_SETTINGS", payload);
  },
  changeSidebarFold({ commit }, bool) {
    // 存储侧边栏折叠状态 1折叠 0展开
    Cookies.set(SIDEBAR_STATUS_KEY, Number(bool));
    commit("CHNAGE_SIDEBAR_FOLD", bool);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
