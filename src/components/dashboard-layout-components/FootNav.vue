<template>
  <footer>
    <ul>
      <li
        v-for="(route, index) in routes"
        :key="index"
        class="d-flex align-center justify-center"
      >
        <router-link
          :to="route.path"
          class="link d-flex align-center justify-center pa-3"
          ><v-icon color="#707A8A">{{ route.icon }}</v-icon>
        </router-link>
      </li>
      <li @click="logOut" class="pa-3">
        <v-icon class="icon" color="#707A8A">mdi-power</v-icon>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "FootNav",
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
          path: "/tasks",
          name: "Tasks",
          icon: "mdi-clipboard-text-outline"
        }
      ]
    };
  },
  methods: {
    checkActiveRoute(path) {
      return path === this.$route.path || path === this.$route.meta.parentRoute;
    },
    logOut() {
      this.$store.dispatch("user/logout");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: $primary-white;
}
ul {
  margin: 0px;
  padding: 0px;
  display: flex;
  li {
    list-style: none;
    width: 20%;
    margin: 0;
    cursor: pointer;
    box-sizing: border-box;
    .link {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
