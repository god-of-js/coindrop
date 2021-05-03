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
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/home/About.vue")
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("@/views/home/Contact.vue")
    },
    {
      path: "/faqs",
      name: "FAQs",
      component: () => import("@/views/home/FAQs.vue")
    },
    {
      path: "/terms",
      name: "TermsAndConditions",
      component: () => import("@/views/home/TermsAndConditions.vue")
    },
    {
      path: "/why-us",
      name: "WhyUs",
      component: () => import("@/views/home/WhyUs.vue")
    },
    {
      path: "/privacy-policy",
      name: "PrivacyPolicy",
      component: () => import("@/views/home/PrivacyPolicy.vue")
    }
  ]
};
