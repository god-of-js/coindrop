import Cookies from "@/plugins/cookies.js";
const userObj = Cookies.get("User");
export default {
  user: userObj
};
