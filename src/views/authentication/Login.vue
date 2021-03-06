<template>
  <main>
    <article>
      <h3 class="pa-1 ma-0">Log In</h3>
      <div class="mb-4 welcome-text">
        Login to gain access to your {{ appName }} dashboard
      </div>
    </article>
    <form action="">
      <custom-input :label="'Email Address'" class="mt-2" />
      <custom-input :label="'Password'" class="mt-2" />
      <custom-button class="mt-2">Log In</custom-button>
    </form>
    <div class="mt-4 login-text">
      <span>
        <router-link to="/register" class="link"
          >Forgot password?</router-link
        ></span
      >
      <span>
        Not a member?
        <router-link to="/register" class="link">Register</router-link></span
      >
    </div>
  </main>
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
.welcome-text {
  color: $text-grey;
  font-size: 0.7em;
}
.acknowledgement-text,
.login-text {
  font-size: 0.7em;
  color: $text-grey;
  display: flex;
  justify-content: space-between;
  .link {
    color: $gold-text;
  }
}
label {
  font-size: 0.7em;
}
</style>
