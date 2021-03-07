<template>
  <nav>
    <ul>
      <li v-for="(route, index) in routes" :key="index">
        <v-icon>{{ route.icon }}</v-icon>
        <span>{{ route.name }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          path: "/dashboard",
          name: "Dashboard",
          icon: "mdi-account"
        },
        {
          path: "/payment",
          name: "Payment",
          icon: "mdi-cash-plus"
        },
        {
          path: "/referrals",
          name: "Referrals",
          icon: "mdi-account-multiple-plus-outline"
        },
        {
          path: "/settings",
          name: "Settings",
          icon: "mdi-tune"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
nav {
  height: 100%;
  min-height: 90vh;
  width: 20%;
  ul {
    li {
      list-style: none;
    }
  }
}
</style>
