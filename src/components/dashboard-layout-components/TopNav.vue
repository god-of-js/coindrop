<template>
  <nav class="d-flex align-center justify-space-between">
    <span v-text="appName" class="app-name" />
  </nav>
</template>

<script>
export default {
  computed: {
    appName() {
      return this.$store.state.app.appName;
    }
  },
  mounted() {
    this.$store.dispatch("notifications/subscribeToPubNub")
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
nav {
  background: $primary-dark-color;
  padding: 15px;
  padding-left: 5%;
  text-align: left;
  .app-name {
    color: $gold-text;
    font-weight: 900;
    font-size: 1.3em;
    text-transform: uppercase;
  }
}
</style>
