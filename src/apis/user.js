import request from "@/utils/axios";
// import { delay, random } from "@/utils/common";
export async function getRole() {
  return await request.get("/api/user/roles");
}
