<template>
  <nav id="nav" class="">
    <router-link to="/">
      <logo class="logo" />
    </router-link>
  </nav>
</template>

<script>
import Logo from "../images/Logo";
export default {
  computed: {
    appName() {
      return this.$store.state.app.appName;
    }
  },
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
#nav {
  background: $primary-dark-color;
  padding: 4px;
  padding-left: 3%;
  text-align: left;
  .logo {
    width: 170px;
  }
}
</style>
