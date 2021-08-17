/**
 * 判断js所有内置对象类型
 * @param {any} origin 任意类型的值
 * @returns String
 */
export function type(origin) {
  return Object.prototype.toString.call(origin).slice(8, -1).toLocaleLowerCase();
}

export default {
  type
};
