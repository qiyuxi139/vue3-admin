/**
 * 判断js所有内置对象类型
 * @param {any} origin 任意类型的值
 * @returns String
 */
export function type(origin) {
  return Object.prototype.toString.call(origin).slice(8, -1).toLocaleLowerCase();
}

/**
 * 得到两个数组的交集 交集内元素不重复
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns Array
 */
export function getIntersection(arr1, arr2) {
  // 去重
  const set = new Set(arr1.filter((it) => arr2.includes(it)));
  return Array.from(set);
}

/**
 * 差集， 差集内元素不重复
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns Array
 */
export function getDifference(arr1, arr2) {
  // arr2->arr1的补集
  const set = new Set(arr2.filter((it) => !arr1.includes(it)));
  return Array.from(set);
}

/**
 * 得到指定字段的对象  这个字段必须是对象中有的
 * @param {*} obj 对象
 * @param {String[]} fields 字段数组
 * @returns Object
 */
export function getIncludesKeyObj(obj, fields) {
  const keys = Object.keys(obj);
  const intersection = getIntersection(keys, fields);
  const specifyKeyObj = {};
  for (const key of intersection) {
    specifyKeyObj[key] = obj[key];
  }
  return specifyKeyObj;
}

/**
 * 得到排除到传入键数组中的对象
 * @param {Object} obj Object
 * @param {Arryar} fields Arryar
 * @returns Object
 */
export function getExcludeKeyObj(obj, fields) {
  const keys = Object.keys(obj);
  const diff = getDifference(fields, keys);
  const excludesKeyObj = {};
  for (const key of diff) {
    excludesKeyObj[key] = obj[key];
  }
  return excludesKeyObj;
}

/**
 * 判断某个属性是否在对象内
 * @param {Obejct} obj Obejct
 * @param {String} key String
 * @returns Boolean
 */
export function mHasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

export default {
  type,
  getIntersection,
  getIncludesKeyObj,
  getExcludeKeyObj,
  mHasOwnProperty,
  delay
};
