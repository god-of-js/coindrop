import api from "../../../plugins/api"
export default {
  namespaced: true,
  state: {
    appName: "Crypto",
    apiUrl: "http://localhost:4000",
    cryptoMarket: []
  },
  mutations: {
    setCryptoMarket(state, param) {
      state.cryptoMarket = param;
    }
  },
  actions: {
    async getCryptoMarket({ commit }) {
      api.get("/application/crypto-market").then(request => {
        console.log(request.data.data);
        commit("setCryptoMarket", request.data.data);
      })
    }
  }
};
