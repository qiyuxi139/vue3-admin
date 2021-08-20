/**
 * 自定义locaStorage有存储时间
 * @param {String} key 键
 * @param {any} val 值
 * @param {Number} maxAge 过期时间 默认为1小时
 */
export function setLocalStorage(key, val, maxAge = 1000 * 60 * 60) {
  localStorage.setItem(
    key,
    JSON.stringify({
      [key]: val,
      timeStamp: new Date().getTime(),
      maxAge
    })
  );
}

/**
 * 根据key获取LocalStorage
 * @param {String} key 键值
 * @returns any
 */
export function getLocalStorage(key) {
  let obj = localStorage.getItem(key);
  if (!obj) {
    return null;
  }
  obj = JSON.parse(obj);
  const curTime = new Date().getTime();
  if (curTime > obj.maxAge + obj.timeStamp) {
    // 过期了
    localStorage.removeItem(key);
    return getLocalStorage(key);
  }
  return obj[key];
}

export default {
  setLocalStorage,
  getLocalStorage
};
