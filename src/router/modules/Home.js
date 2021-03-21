import Home from "../../views/Home.vue";
export default {
  path: "/",
  name: "Home",
  component: Home,
  children: [
    {
      path: "/",
      name: "Home-Index",
      component: () => import("@/views/home/index.vue")
    }
  ]
};
