import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/application";
import modal from "./modules/modal";
import auth from "./modules/auth";
import user from "./modules/user";
import payment from "./modules/payment";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    modal,
    auth,
    user,
    payment
  }
});
