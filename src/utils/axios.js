import axios from "axios";
import qs from "qs";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API, // url = base url + request url
  timeout: 30000 // request timeout
});

// 用于根据当前请求的信息，生成请求 Key
function generateReqKey(config) {
  const { method, url, params, data } = config;
  return [method, url, qs.stringify(params), qs.stringify(data)].join("&");
}

const pendingRequest = new Map();
// 用于把当前请求信息添加到pendingRequest对象中
function addPendingRequest(config) {
  const requestKey = generateReqKey(config);
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingRequest.has(requestKey)) {
        pendingRequest.set(requestKey, cancel);
      }
    });
}

// 检查是否存在重复请求，若存在则取消已发的请求。
function removePendingRequest(config) {
  const requestKey = generateReqKey(config);
  if (pendingRequest.has(requestKey)) {
    const cancelToken = pendingRequest.get(requestKey);
    cancelToken(requestKey);
    pendingRequest.delete(requestKey);
  }
}

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    removePendingRequest(config); // 检查是否存在重复请求，若存在则取消已发的请求
    addPendingRequest(config); // 把当前请求信息添加到pendingRequest对象中
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    removePendingRequest(response.config); // 从pendingRequest对象中移除请求
    return response.data;
  },
  (error) => {
    removePendingRequest(error.config || {}); // 从pendingRequest对象中移除请求
    if (axios.isCancel(error)) {
      console.log("已取消的重复请求：" + error.message);
    } else {
      // 添加异常处理
    }
    return Promise.reject(error);
  }
);

export default instance;
