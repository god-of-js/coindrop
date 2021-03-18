import Vue from "vue";
const instance = new Vue();
export default {
  getRefferals({ rootState, commit }) {
    instance.$api
      .get(`/referrals/refferals/${rootState.user.user.email}`)
      .then(response => {
        console.log(response.data.data);
        commit("setReferrals", response.data.data);
      });
  }
};
