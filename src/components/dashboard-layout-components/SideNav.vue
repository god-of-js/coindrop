<template>
  <nav>
    <ul class="pa-0">
      <li
        v-for="(route, index) in routes"
        :key="index"
        :class="checkActiveRoute(route.path) ? 'active-route' : ''"
      >
        <router-link
          class="pa-3 d-flex align-center route-link"
          :to="route.path"
        >
          <v-icon class="mr-5 icon" color="#707A8A">{{ route.icon }}</v-icon>
          <span>{{ route.name }}</span>
        </router-link>
      </li>
      <li @click="logOut" class="pa-3">
        <v-icon class="mr-5 icon" color="#707A8A">mdi-power</v-icon>
        <span>Log Out</span>
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
@import "../../assets/styles/colors.scss";
nav {
  height: 100%;
  min-height: 91vh;
  width: 17%;
  border-right: 1px solid #cfd2d4;
  background: $primary-white;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 8%) 0px 0px 4px;
  ul {
    li {
      list-style: none;
      cursor: pointer;
      border-left: 4px;
      &:hover {
        background: $hover-color;
      }
      span {
        font-size: 0.8em;
        color: $text-grey;
      }
      .route-link {
        text-decoration: none;
      }
      &.active-route {
        background: $hover-color;
        border-left: 4px solid $gold-text;
        .icon {
          color: $gold-text !important;
        }
        span {
          color: $gold-text;
        }
      }
    }
  }
}
</style>
