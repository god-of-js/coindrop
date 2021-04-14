import api from "@/plugins/api";
export default {
  getTax({ rootState, commit }, { id }) {
    return api(rootState.user.user.JWT)
      .get(`/tax/get-tax/${id}`)
      .then(({ data }) => {
        console.log(data.data);
        commit("setTax", data.data);
      });
  },
  payTax({ rootState }, taxId) {
    return api(rootState.user.user.JWT).post("/tax/verify-task-payment", {
      userId: rootState.user.user._id,
      taxId
    });
  }
};
