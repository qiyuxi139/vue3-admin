// import request from "@/utils/axios";
import { delay, random } from "@/utils/common";
import roles from "../../mock/role.js";
export async function getRole() {
  await delay(random(2, 6) * 100);
  return roles;
}
