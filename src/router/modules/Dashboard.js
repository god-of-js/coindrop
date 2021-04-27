import Dashboard from "@/views/Dashboard";
import store from "@/store";
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
      path: "/payment/pay-tax/:id/:coin",
      name: "pay-tax",
      component: () => import("@/views/dashboard/payment/Tax.vue")
    },
    {
      path: "/payment",
      name: "Payment",
      component: () => import("@/views/dashboard/Payment.vue"),
      redirect: "/payment/withdraw",
      children: [
        {
          path: "/payment/upgrade/:type",
          name: "Upgrade",
          component: () => import("@/views/dashboard/payment/Upgrade.vue"),
          meta: {
            parentRoute: "/payment",
            parent: "/payment/plans"
          }
        },
        {
          path: "/payment/deposits/:id",
          name: "Withdrawal",
          component: () => import("@/views/dashboard/payment/Deposit.vue"),
          meta: {
            parentRoute: "/payment",
            parent: "/payment/deposits"
          }
        },
        {
          path: "/payment/withdraw",
          name: "Withdrawals",
          component: () => import("@/views/dashboard/payment/Withdrawals.vue"),
          meta: {
            parentRoute: "/payment"
          }
        },
        {
          path: "/payment/withdraw/:id",
          name: "Withdrawal",
          component: () => import("@/views/dashboard/payment/Withdrawal.vue"),
          meta: {
            parentRoute: "/payment",
            parent: "/payment/withdraw"
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
    },
    {
      path: "/tasks",
      component: () => import("@/views/dashboard/Tasks.vue")
    },
    {
      path: "/task/:id",
      component: () => import("@/views/dashboard/tasks/Task.vue"),
      meta: {
        parentRoute: "/tasks"
      }
    },
    {
      path: "/notifications",
      component: () => import("@/views/dashboard/Notifications.vue")
    },
    {
      path: "/profile-settings",
      component: () => import("@/views/dashboard/Settings.vue")
    }
  ],
  beforeEnter(to, from, next) {
    if (!store.state.user.user.JWT) {
      next("/login");
    } else {
      next();
    }
  }
};
