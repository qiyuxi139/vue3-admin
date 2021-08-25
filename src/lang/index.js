import { ref } from "vue";
import zh from "@/lang/zh";
import en from "@/lang/en";
import store from "@/store";

const lang = store.getters.lang || "zh";

export const allLang = {
  zh,
  en
};

const key = Object.keys(allLang).includes(lang) ? lang : "zh";
console.log(key);
export const locale = ref(allLang[key]);
