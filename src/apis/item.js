import request from "@/utils/axios";
export async function getItemList(params) {
  return await request({
    method: "get",
    url: "/api/item/lib/list",
    params
  });
}
