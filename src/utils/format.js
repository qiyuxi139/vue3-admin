import { type } from "./common";

/**
 * 保留小数点后两位包括0
 * @param {String | Number} price 数字字符串或者数字
 * @returns String
 */
export function fixedTwo(price) {
  const priceType = type(price);

  if (!["string", "number"].includes(priceType) || Number.isNaN(+price) || price === "") {
    return "0.00";
  }
  return (+price).toFixed(2);
}

export function formatTime() {}

export default {
  fixedTwo,
  formatTime
};
