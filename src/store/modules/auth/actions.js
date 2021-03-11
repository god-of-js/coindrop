import Vue from "vue";
const instance = new Vue();
export default {
  register({ commit }, data) {
    instance.$api.post("/authentication/register", data).then(result => {
      commit("user/saveUser", result.data.data, { root: true });
      instance.$router.push("/dashboard");
    });
  }
};
