import { ref } from "vue";
import store from "@/store";
import { mHasOwnProperty, type } from "@/utils/common";
import { getFilename, getModulesDefault } from "@/utils/module";

const lang = store.getters.lang || "zh";

const ms = import.meta.globEager("./*.js");

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
    throw new TypeError("arg error");
  }
  locale.value = allLang[key];
};

const key = Object.keys(allLang).includes(lang) ? lang : "zh";
export const locale = ref(allLang[key]);
