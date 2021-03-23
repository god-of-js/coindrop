import api from "@/plugins/api";
export default {
  getRefferals({ rootState, commit }) {
    api(rootState.user.user.JWT)
      .get(`/referrals/refferals/${rootState.user.user.email}`)
      .then(response => {
        console.log(response.data.data);
        commit("setReferrals", response.data.data);
      });
  }
};
