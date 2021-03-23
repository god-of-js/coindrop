import api from "@/plugins/api";
import router from "@/router";
import cookies from "@/plugins/cookies.js";
export default {
  register({ commit }, data) {
    return new Promise((resolve, reject) => {
      api
        .post("/authentication/register", data)
        .then(async result => {
          cookies.set("JWT", result.data.data.JWT);
          cookies.set("User", result.data.data);
          commit("user/saveUser", result.data.data, { root: true });
          router.push("/dashboard");
        })
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  },
  login({ commit }, data) {
    return new Promise(resolve => {
      api.post("/authentication/login", data)
        .then(async result => {
          cookies.set("JWT", result.data.data.JWT);
          cookies.set("User", result.data.data);
          commit("user/saveUser", result.data.data, { root: true });
          router.push("/dashboard");
        })
        .finally(() => {
          resolve();
        });
    });
  }
};
