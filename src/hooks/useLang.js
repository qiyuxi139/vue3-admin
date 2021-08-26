import { useLocaleInject } from "element-plus/packages/hooks/use-locale";
import { locale, setLocale, langDesc } from "@/lang";
export default function useLang() {
  const { t } = useLocaleInject();
  return {
    locale,
    setLocale,
    langDesc,
    t
  };
}
