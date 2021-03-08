import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/application";
import modal from "./modules/modal";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    modal
  }
});
