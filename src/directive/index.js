import { getModulesDefault } from "@/utils/module";

const ms = import.meta.globEager("./*.js");
export default getModulesDefault(ms);
