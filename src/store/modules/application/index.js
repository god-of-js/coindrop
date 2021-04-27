import api from "../../../plugins/api";
import axios from "axios"
export default {
  namespaced: true,
  state: {
    appName: "CoinDrop",
    apiUrl: "http://localhost:4000",
    cryptoMarket: [],
    baseUrl: "coindrop.live",
    sidebar: false,
    countries: []
  },
  mutations: {
    setCryptoMarket(state, param) {
      state.cryptoMarket = param;
    },
    sideBarStatus(state, param) {
      state.sidebar = param;
    },
    setCountries(state, countries) {
      state.countries = countries
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
    },
    async getCountries({ commit }) {
      axios.get("https://countriesnow.space/api/v0.1/countries").then(result => {
        commit("setCountries", result.data.data);
      })
    }
  }
};
