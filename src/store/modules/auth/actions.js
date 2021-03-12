import Vue from "vue";
import router from "@/router";
const instance = new Vue();
export default {
  register({ commit }, data) {
    instance.$api.post("/authentication/register", data).then(result => {
      console.log(result.data.data);
      commit("user/saveUser", result.data.data, { root: true });
      router.push("/dashboard");
    });
  },
  login({ commit }, data) {
    instance.$api.post("/authentication/login", data).then(result => {
      console.log(result.data.data);
      commit("user/saveUser", result.data.data, { root: true });
      router.push("/dashboard");
    });
  }
};
