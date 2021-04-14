import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/application";
import modal from "./modules/modal";
import auth from "./modules/auth";
import tasks from "./modules/tasks";
import user from "./modules/user";
import payment from "./modules/payment";
import admin from "./modules/admin";
import notifications from "./modules/notifications";
import refferals from "./modules/refferals";
import tax from "./modules/tax";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    modal,
    auth,
    user,
    payment,
    admin,
    refferals,
    notifications,
    tasks,
    tax
  }
});
