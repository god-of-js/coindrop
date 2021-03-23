import cookies from "@/plugins/cookies.js";
import api from "@/plugins/api.js";
import router from "@/router";
export default {
  logout({ commit }) {
    router.push("/login");
    cookies.remove("JWT");
    cookies.remove("User");
    commit("saveUser", {});
    location.reload();
  },
  getUserProfile({ state, commit }) {
    api(state.user.JWT)
      .get(`/user/user-profile/${state.user._id}`)
      .then(response => {
        commit("saveUser", response.data.data);
      });
  }
};
