import Cookies from "js-cookie";

const TOKEN_KEY = "xxxx";

export function setToken(token) {
  Cookies.setToken(TOKEN_KEY, token);
}

export function getToken() {
  return Cookies.getToken(TOKEN_KEY);
}

export function removeToken() {
  Cookies.removeToken(TOKEN_KEY);
}
