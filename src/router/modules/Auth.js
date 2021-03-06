export default {
  path: "/authentication",
  name: "Authentication",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
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
