import { chain } from "lodash";

/**
 * 获取路径中的文件名
 * @param {String} path 路径
 * @returns String
 */
export function getFilename(path) {
  const startI = path.lastIndexOf("/") + 1;
  const endI = path.lastIndexOf(".");
  if (startI >= endI) {
    throw new Error("arg error");
  }
  return path.substring(startI, endI);
}

/**
 * 将模块对象中的默认导出 集合成一个对象键名就是文件名
 * @param {Module Object} ms 模块对象
 * @returns Object
 */
export function getModulesDefault(ms) {
  return chain(ms)
    .mapKeys((value, key) => getFilename(key))
    .mapValues((value) => value.default)
    .value();
}

export default {
  getFilename,
  getModulesDefault
};
