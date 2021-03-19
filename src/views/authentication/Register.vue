<template>
  <main>
    <article class="text-center">
      <h3 class="pa-1 ma-0">Create a free account</h3>
      <div class="mb-4 welcome-text">Welcome to {{ appName }}</div>
    </article>
    <form action="" @submit.prevent="register">
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
      <custom-input
        :label="'Referral Email(optional)'"
        :inputType="'email'"
        class="mt-2"
        @data="e => (data.refEmail = e)"
      />
      <custom-button class="mt-2" :inactive="disabled" :loading="loading">Create Account</custom-button>
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
  data: () => {
    return {
      data: {
        email: null,
        password: null,
        refEmail: null
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
    async register() {
      this.loading = true;
      await this.$store.dispatch("auth/register", this.data);
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
  .link {
    color: $gold-text;
  }
}
label {
  font-size: 0.7em;
}
</style>
