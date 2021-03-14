import Vue from "vue";
const instance = new Vue();
export default {
  paymentMade({ rootState }, data) {
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
  }
};
