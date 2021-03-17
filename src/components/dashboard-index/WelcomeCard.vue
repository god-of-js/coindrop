<template>
  <div class="welcome-card pa-5 d-flex align-center">
    <v-avatar class="avatar mr-5">
      {{ initials }}
    </v-avatar>
    <div class="welcome-text">
      <p>
        <b>Hey {{ userName }}</b
        >, Welcome to your {{ appName }} dashboard.
      </p>
      <p>What would you be doing today?</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.user.email.split("@")[0];
    },
    appName() {
      return this.$store.state.app.appName;
    },
    initials() {
      let name = "Henry Eze",
        initials;
      initials = name.split(" ")[0][0] + name.split(" ")[0][1];
      return initials;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/mixins.scss";
.welcome-card {
  background: $primary-white;
  margin: auto;
  @include box-shadow();
  .avatar {
    text-transform: uppercase;
    background: $secondary-background;
    font-weight: bold;
  }
  p {
    padding: 0px;
    margin: 0px;
    font-size: 0.9em;
  }
}
</style>
