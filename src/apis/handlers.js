import request from "@/utils/axios";

export function handlerGetRequest(url, params) {
  return request({
    method: "get",
    url,
    params
  });
}
