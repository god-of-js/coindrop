<template>
  <div class="settings">
    <header class="pa-3 mt-3">
      <h1>Account Settings</h1>
    </header>
    <div class="settings-body mt-3 pa-4 mb-3">
      <v-row class="d-flex" v-if="!isVerified">
        <v-col sm="9">
          <h3>Verify Account</h3>
          <p>
            Account verification is essential so we can avoid scam and be aware
            of who our users are. It is compulsory if you are to withdraw your
            tokens.
          </p></v-col
        >
        <v-col class="d-flex align-center justify-end" sm="3">
          <router-link to="/verify-account">
            <custom-button>Verify Account</custom-button>
          </router-link>
        </v-col>
      </v-row>
      <v-row class="d-flex">
        <v-col sm="9">
          <h3>My Profile</h3>
          <p>
            View your profile and details concerning your account here.
          </p></v-col
        >
        <v-col class="d-flex align-center justify-end" sm="3">
          <router-link to="/verify-account"></router-link>
          <custom-button>View My Profile</custom-button>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isVerified() {
      return this.$store.state.user.user.isVerified;
    }
  },
  mounted() {
    this.$store.dispatch("user/getUserProfile");
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
@import "@/assets/styles/mixins.scss";
.settings {
  &-body,
  header {
    background: $primary-white;
    @include box-shadow();
  }
  ::v-deep {
    button {
      width: fit-content;
    }
  }
}
</style>
