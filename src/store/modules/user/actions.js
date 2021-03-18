import Vue from "vue";
const instance = new Vue();
import cookies from "@/plugins/cookies.js";
import router from "@/router";
export default {
  logout({ commit }) {
    router.push("/login");
    cookies.remove("JWT");
    cookies.remove("User");
    commit("saveUser", {});
  },
  getUserProfile({ state, commit }) {
    setTimeout(function () {
      instance.$api.get(`/user/user-profile/${state.user._id}`).then(response => {
        commit("saveUser", response.data.data);
      });
    }, 10000);

  }
};
