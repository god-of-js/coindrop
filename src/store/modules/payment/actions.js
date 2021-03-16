import Vue from "vue";
const instance = new Vue();
export default {
  claimPayment({ rootState }, data) {
    return new Promise(resolve => {
      instance.$api
        .post("/payment/user-claims-payment", {
          id: rootState.user.user._id,
          ...data
        })
        .finally(() => {
          resolve();
        });
    });
  },
  requestWithdrawal({ rootState }, data) {
    return new Promise((resolve, reject) => {
      instance.$api
        .post("/payment/make-withdrawal-request", {
          userId: rootState.user.user._id,
          ...data
        })
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  },
  getWithdrawalRequests({ commit, rootState }) {
    console.log(rootState.user.user._id);
    instance.$api
      .get(`/payment/get-withdrawal-requests/${rootState.user.user._id}`)
      .then(result => {
        console.log(result.data.data);
        commit("setWithdrawalRequests", result.data.data);
      });
  }
};
