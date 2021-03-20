<template>
  <nav id="nav" class="d-flex align-center justify-space-between">
    <span class="nav-name" v-text="appName" />
    <ul class="pa-0 ma-0">
        <li><custom-button>Login</custom-button></li>
    </ul>
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
::v-deep {
    #btn {
        height: 30px;
        width: 100px
    }
}
</style>
