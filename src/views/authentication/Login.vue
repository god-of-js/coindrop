<template>
  <main>
    <article class="text-center">
      <h3 class="pa-1 ma-0">Log In</h3>
      <div class="mb-4 welcome-text">
        Login to gain access to your {{ appName }} dashboard
      </div>
    </article>
    <form action="" @submit.prevent="login">
      <custom-input
        :label="'Email Address'"
        :inputType="'email'"
        class="mt-2"
        @data="e => (data.email = e)"
        :requiredInput="true"
      />
      <custom-input
        :label="'Password'"
        :inputType="'password'"
        class="mt-2"
        @data="e => (data.password = e)"
        :requiredInput="true"
      />
      <custom-button class="mt-2" :inactive="disabled" :loading="loading"
        >Log In</custom-button
      >
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
  data: () => {
    return {
      data: {
        email: null,
        password: null
      },
      loading: false
    };
  },
  computed: {
    appName() {
      return this.$store.state.app.appName;
    },
    disabled() {
      return !this.data.email || !this.data.password;
    }
  },
  methods: {
    async login() {
      this.loading = true;
      this.data.email = this.data.email.toLowerCase();
      await this.$store.dispatch("auth/login", this.data);
      // alert("done");
      this.loading = false;
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
