import { getModulesDefault } from "@/utils/module";

const ms = import.meta.globEager("./*.js");

const modules = getModulesDefault(ms);

export default modules;
