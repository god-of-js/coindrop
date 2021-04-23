import api from "../../../plugins/api";
export default {
  namespaced: true,
  state: {
    appName: "CoinDrop",
    apiUrl: "http://localhost:4000",
    cryptoMarket: [],
    baseUrl: "coindrop.live",
    sidebar: false
  },
  mutations: {
    setCryptoMarket(state, param) {
      state.cryptoMarket = param;
    },
    sideBarStatus(state, param) {
      state.sidebar = param;
    }
  },
  actions: {
    async getCryptoMarket({ commit }) {
      api()
        .get("/application/crypto-market")
        .then(request => {
          console.log(request.data.data);
          commit("setCryptoMarket", request.data.data);
        });
    }
  }
};
