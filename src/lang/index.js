import { ref } from "vue";
import store from "@/store";
import { mHasOwnProperty, type } from "@/utils/common";
import { getFilename, getModulesDefault } from "@/utils/module";
import message from "@/utils/reset/mElMessage";

const lang = store.getters.lang || "zh";

const ms = import.meta.globEager("./*.js");

// 得到语言对象数组
function getLangDesc() {
  return Object.keys(ms).map((it) => ({
    key: getFilename(it),
    name: ms[it].name
  }));
}

export const allLang = getModulesDefault(ms);

export const langDesc = getLangDesc();

export const setLocale = (key) => {
  if (!(type(key) === "string" && mHasOwnProperty(allLang, key))) {
    message.success("切换语言失败");
    throw new TypeError("arg error");
  }
  locale.value = allLang[key];
  store.dispatch("settings/changeLang", key);
  message.success("切换语言成功");
};

const key = Object.keys(allLang).includes(lang) ? lang : "zh";
export const locale = ref(allLang[key]);
