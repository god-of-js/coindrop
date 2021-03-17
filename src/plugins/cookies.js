import Cookies from "js-cookie";
// ["User", JWT]
const set = (name, value) => {
  console.log(name, value);
  Cookies.set(name, value);
};
const remove = name => {
  Cookies.remove(name);
};
const getToken = () => {
  return Cookies.get("JWT") ?? "";
};
const get = name => {
  const cookie = Cookies.get(name);
  let gottenCookie = cookie ? JSON.parse(cookie) : {};
  return gottenCookie;
};
export default {
  set,
  remove,
  getToken,
  get
};
