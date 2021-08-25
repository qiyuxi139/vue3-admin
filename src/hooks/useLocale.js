import { ref } from "vue";
import { useLocaleInject } from "element-plus/packages/hooks/use-locale";
import langs from "@/lang";
import { mHasOwnProperty, type } from "@/utils/common";
console.log(langs);
export default function useLocale() {
  const locale = ref(langs["zh"]);
  const { t } = useLocaleInject();
  const setLocale = (key) => {
    if (!(type(key) === "string" && mHasOwnProperty(langs, key))) {
      throw new TypeError("arg error");
    }
    locale.value = langs[key];
  };
  return {
    locale,
    setLocale,
    t
  };
}
