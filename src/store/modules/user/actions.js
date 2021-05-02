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
        console.log(response.data.data);
        commit("saveUser", response.data.data);
      });
  },
  updateUserProfile({ state, dispatch }, data) {
    return new Promise(resolve => {
      api(state.user.JWT)
        .patch(`/user/update-user-profile/${state.user._id}`, data)
        .then(response => {
          dispatch("getUserProfile", response.data.data);
          resolve(response.data.data);
        })
        .catch(err => {
          resolve(err);
          throw new Error(err);
        });
    });
  }
};
