<template>
  <nav id="nav" class="">
    <span class="nav-name" v-text="appName" />
  </nav>
</template>

<script>
export default {
  computed: {
    appName() {
      return this.$store.state.app.appName;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
#nav {
  background: $primary-dark-color;
  padding: 15px;
  padding-left: 5%;
  text-align: left;
  .nav-name {
    color: $gold-text;
    font-weight: 900;
    font-size: 1.3em;
    text-transform: uppercase;
  }
}
</style>
