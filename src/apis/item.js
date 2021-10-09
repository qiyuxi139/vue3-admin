import { handlerGetRequest } from "./handlers";

export const getItemList = (params) => handlerGetRequest("/api/list", params);

export default {
  getItemList
};
