import Cookies from "js-cookie";

const TOKEN_KEY = "TOKEN_KEY";
export function setToken(token) {
  Cookies.set(TOKEN_KEY, token);
}

export function getToken() {
  return Cookies.get(TOKEN_KEY);
}

export function removeToken() {
  Cookies.remove(TOKEN_KEY);
}

export default {
  getToken,
  setToken,
  removeToken
};
