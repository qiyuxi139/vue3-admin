/**
 *  根据设置时间 得到一个日期对象
 * @param {*} setTime 固定格式 yyyy-mm-d hh:mm:ss
 * @returns Date
 */
export function setDate(setTime) {
  const date = new Date();
  const [ymd, hms] = setTime.split(" ");
  const [y, mon, d] = ymd.split("-");
  const [h, min, s] = hms.split(":");
  date.setFullYear(+y);
  date.setMonth(mon - 1);
  date.setDate(+d);
  date.setHours(+h);
  date.setMinutes(+min);
  date.setSeconds(+s);
  return date;
}

export default {
  setDate
};
