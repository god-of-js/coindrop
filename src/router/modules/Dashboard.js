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
      path: "/referrals",
      name: "referrals",
      component: () => import("@/views/dashboard/Referrals.vue")
    },
    {
      path: "/payment",
      name: "Payment",
      component: () => import("@/views/dashboard/Payment.vue"),
      redirect: "/payment/deposit",
      children: [
        {
          path: "/payment/deposit",
          name: "Deposit",
          component: () => import("@/views/dashboard/payment/Deposit.vue"),
          meta: {
            parentRoute: "/payment"
          }
        },
        {
          path: "/payment/withdraw",
          name: "Withdraw",
          component: () => import("@/views/dashboard/payment/Withdraw.vue"),
          meta: {
            parentRoute: "/payment"
          }
        }
      ]
    }
  ]
};
