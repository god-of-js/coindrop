import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Auth from "./modules/Auth";
import Dashboard from "./modules/Dashboard";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  Auth,
  Dashboard
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
