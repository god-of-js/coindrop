<template>
  <footer>
    <ul>
      <li
        v-for="(route, index) in routes"
        :key="index"
        :color="checkActiveRoute(route.path) ? '#c99400' : '#707A8A'"
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
import routes from "@/helpers/routes";
export default {
  name: "FootNav",
  data() {
    return {
      routes
    };
  },
  methods: {
    checkActiveRoute(path) {
      console.log(
        path === this.$route.path || path === this.$route.meta.parentRoute
      );
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
footer {
  position: absolute;
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
