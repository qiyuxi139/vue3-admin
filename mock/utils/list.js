import Mock from "mockjs";
import { getSuccessResult } from "./result";

/**
 * 常规分页
 * @param {Object} param0 page当前页 liimit每页限制 total总数 mock规则
 * @returns Object[]
 */
export function getCommonList({ page = 1, limit = 10, total, mOps = {} }) {
  if (!total) {
    throw new TypeError("total is must!");
  }
  let mock = null;
  const cur = page * limit;
  const len = cur <= total ? limit : cur - total <= limit ? total % limit : 0;
  if (len > 0) {
    const key = `list|${len}`;
    mock = Mock.mock({
      [key]: [mOps]
    });
  } else {
    mock = {
      list: [],
      total
    };
  }
  const result = {
    list: mock.list,
    total: total
  };

  return getSuccessResult(result);
}
