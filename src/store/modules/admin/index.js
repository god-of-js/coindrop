import Vue from "vue";
const instance = new Vue();
export default {
  namespaced: true,
  actions: {
    async getUserPayments({ commit }) {
      const payments = await instance.$api.get("/admin/get-user-payments/all");
      console.log(payments);
      commit;
    }
  }
};
