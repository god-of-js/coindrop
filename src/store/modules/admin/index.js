import api from "@/plugins/api";
export default {
  namespaced: true,
  actions: {
    async getUserPayments({ commit }) {
      const payments = await api.get("/admin/get-user-payments/all");
      console.log(payments);
      commit;
    }
  }
};
