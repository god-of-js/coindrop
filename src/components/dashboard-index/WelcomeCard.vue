<template>
  <div class="welcome-card pa-5 d-flex align-center">
    <v-avatar class="avatar mr-5">
      {{ initials }}
    </v-avatar>
    <div class="welcome-text">
      <p>
        <b>Hey {{ user.name }}</b
        >, Welcome to your {{ appName }} dashboard.
      </p>
      <p>What would you be doing today?</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return {
        name: "Henry Eze",
        email: "henryeze019@gmail.com"
      };
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
  // width: 97%;
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
