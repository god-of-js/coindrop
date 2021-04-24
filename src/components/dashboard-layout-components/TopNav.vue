<template>
  <nav class="d-flex align-center justify-space-between">
    <logo class="logo" />
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
  },
  mounted() {
    this.$store.dispatch("notifications/subscribeToPubNub");
    this.$store.dispatch("tasks/subscribeToPubNub");
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
nav {
  background: $primary-dark-color;
  padding: 5px;
  text-align: left;
  .logo {
    width: 170px;
  }
}
</style>
