<template>
  <main>
    <article>
      <h3 class="pa-1 ma-0">Create a free account</h3>
      <div class="mb-4 welcome-text">Welcome to {{ appName }}</div>
    </article>
    <form action="">
      <custom-input :label="'Email Address'" class="mt-2" />
      <custom-input :label="'Password'" class="mt-2" />
      <custom-input :label="'Referral Email(optional)'" class="mt-2" />
      <custom-button class="mt-2">Create Account</custom-button>
      <p class="acknowledgement-text mt-2 text-left">
        By creating your account, you hereby admit that you have read
        {{ appName }}'s
        <router-link to="/terms-of-service" class="link"
          >Terms of service</router-link
        >
      </p>
    </form>
    <div class="mt-4 login-text text-center">
      Already a member?
      <router-link to="/login" class="link">login</router-link>
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
  .link {
    color: $gold-text;
  }
}
label {
  font-size: 0.7em;
}
</style>
