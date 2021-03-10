export default {
  path: "/authentication",
  name: "Authentication",
  component: () =>
    import(/* webpackChunkName: "about" */ "../../views/Authentication.vue"),
  children: [
    {
      path: "/register",
      name: "Register",
      component: () => import("../../views/authentication/Register.vue")
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../../views/authentication/Login.vue")
    }
  ]
};
