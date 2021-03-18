import Vue from "vue";
import router from "@/router";
const instance = new Vue();
import cookies from "@/plugins/cookies.js";
export default {
  register({ commit }, data) {
    instance.$api
      .post("/authentication/register", data)
      .then(async result => {
        cookies.set("User", result.data.data);
        cookies.set("JWT", result.data.data.JWT);
        commit("user/saveUser", result.data.data, { root: true });
      })
      .then(() => {
        router.push("/dashboard");
      });
  },
  login({ commit }, data) {
    instance.$api
      .post("/authentication/login", data)
      .then(async result => {
        console.log(result.data.data.JWT);
        cookies.set("User", result.data.data);
        cookies.set("JWT", result.data.data.JWT);
        commit("user/saveUser", result.data.data, { root: true });
      })
      .then(() => {
        router.push("/dashboard");
      });
  }
};
