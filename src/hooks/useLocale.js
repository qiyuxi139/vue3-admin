import { useLocaleInject } from "element-plus/packages/hooks/use-locale";
import { locale, allLang } from "@/lang";
import { mHasOwnProperty, type } from "@/utils/common";
console.log(allLang);
export default function useLocale() {
  const { t } = useLocaleInject();
  const setLocale = (key) => {
    if (!(type(key) === "string" && mHasOwnProperty(allLang, key))) {
      throw new TypeError("arg error");
    }
    locale.value = allLang[key];
  };
  return {
    locale,
    setLocale,
    t
  };
}
