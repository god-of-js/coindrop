import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "./modules/Auth";
import Dashboard from "./modules/Dashboard";
import Home from "./modules/Home";
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  Home,
  Auth,
  Dashboard
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
