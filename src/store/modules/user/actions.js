import Vue from "vue";
const instance = new Vue();
import cookies from "@/plugins/cookies.js";
import router from "@/router";
export default {
  logout({ commit }) {
    commit("saveUser", null);
    cookies.remove("JWT");
    cookies.remove("User");
    router.push("/login");
  },
  getUserProfile({ state, commit }) {
    instance.$api.get(`/user/user-profile/${state.user._id}`).then(response => {
      commit("saveUser", response.data.data);
    });
  }
};
