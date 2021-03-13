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
  return Cookies.get("JWT");
};
const get = name => {
  let gottenCookie = JSON.parse(Cookies.get(name)) ?? null;
  return gottenCookie;
};
export default {
  set,
  remove,
  getToken,
  get
};
