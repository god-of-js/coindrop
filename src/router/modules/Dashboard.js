import Dashboard from "@/views/Dashboard";
export default {
  path: "/dashboard",
  name: "Dashboard",
  component: Dashboard,
  children: [
    {
      path: "/",
      name: "index",
      component: () => import("@/views/dashboard/index.vue")
    }
  ]
};
