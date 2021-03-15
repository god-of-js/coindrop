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
    },
    {
      path: "/payment/plans",
      name: "plans",
      component: () => import("@/views/dashboard/Plans.vue"),
      meta: {
        parentRoute: "/payment"
      }
    },
    {
      path: "/referrals",
      name: "referrals",
      component: () => import("@/views/dashboard/Referrals.vue")
    },
    {
      path: "/payment",
      name: "Payment",
      component: () => import("@/views/dashboard/Payment.vue"),
      redirect: "/payment/deposits",
      children: [
        {
          path: "/payment/upgrade/:type/:crypto",
          name: "Upgrade",
          component: () => import("@/views/dashboard/payment/Upgrade.vue"),
          meta: {
            parentRoute: "/payment",
            parent: "/payment/plans"
          }
        },
        {
          path: "/payment/withdraw",
          name: "Withdraw",
          component: () => import("@/views/dashboard/payment/Withdraw.vue"),
          meta: {
            parentRoute: "/payment"
          }
        },
        {
          path: "/payment/deposits",
          name: "Deposits",
          component: () => import("@/views/dashboard/payment/Deposits.vue"),
          meta: {
            parentRoute: "/payment"
          }
        }
      ]
    }
  ]
};
