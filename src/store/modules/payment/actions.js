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
  requestWithdrawal({ rootState, dispatch, commit }, data) {
    return new Promise((resolve, reject) => {
      instance.$api
        .post("/payment/make-withdrawal-request", {
          userId: rootState.user.user._id,
          ...data
        })
        .then(() => {
          dispatch("getWithdrawalRequests");
          commit("modal/setActiveModal", null, { root: true });
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  },
  getWithdrawalRequests({ commit, rootState }) {
    instance.$api
      .get(`/payment/get-withdrawal-requests/${rootState.user.user._id}`)
      .then(result => {
        console.log(result.data.data);
        commit("setWithdrawalRequests", result.data.data);
      });
  },
  getClaimedPayments({ commit, rootState }) {
    instance.$api
      .get(`/payment/claimed-payments/${rootState.user.user._id}`)
      .then(result => {
        console.log(result.data.data);
        commit("setClaimedPayments", result.data.data);
      });
  },
  getClaimedPayment({ commit }, { id }) {
    instance.$api.get(`/payment/claimed-payment/${id}`).then(result => {
      console.log(result.data.data);
      commit("setClaimedPayment", result.data.data);
    });
  },
  getWithdrawalRequest({ commit }, { id }) {
    instance.$api.get(`/payment/get-withdrawal-request/${id}`).then(result => {
      console.log(result.data.data);
      commit("setWithdrawalRequest", result.data.data);
    });
  }
};
