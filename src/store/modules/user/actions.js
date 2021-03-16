import cookies from "@/plugins/cookies.js";
export default {
  logout({ commit }) {
    commit("saveUser", null);
    cookies.remove("JWT");
    cookies.remove("User");
  }
};
