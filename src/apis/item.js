import { handlerGetRequest } from "./handlers";

export const getItemList = (params) => handlerGetRequest("/api/item/lib/list", params);

export default {
  getItemList
};
