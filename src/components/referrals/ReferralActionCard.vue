<template>
  <v-row class="referral-action-card pa-5 d-flex align-center">
    <v-col sm="12" lg="8" md="6" class="d-flex align-center">
      <v-avatar class="avatar mr-5">
        <v-icon>mdi-account-multiple-plus-outline</v-icon>
      </v-avatar>
      <div class="refer-text">
        <p>
          <b>Refer friends to {{ appName }}</b
          >.
        </p>
        <p>
          Earn over 50% commision everytime your friends make a transaction on
          {{ appName }}
        </p>
      </div></v-col
    >
    <v-col sm="12" lg="4" class="pa-0" md="6">
      <div class="d-flex align-center">
        <input
          type="text"
          v-model="referralId"
          disabled
          class="mr-2"
          id="referralcode"
        />
        <custom-button class="btn mr-2" @click="getReferralCode"
          >Copy referral code</custom-button
        >
        <custom-button class="btn">Invite by email</custom-button>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => {
    return {
      referralId: "098756jbht"
    };
  },
  computed: {
    appName() {
      return this.$store.state.app.appName;
    }
  },
  methods: {
    getReferralCode() {
      var copyText = document.getElementById("referralcode");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/mixins.scss";
.referral-action-card {
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
  input {
    height: 38px;
    width: fit-content;
    max-width: 130px;
    padding-left: 6px;
    background: $primary-white;
    border-radius: 5px;
    outline: none;
    border: 1px solid $border-color;
    box-sizing: border-box;
    font-size: 1em;
    ::placeholder {
      color: $border-color;
    }
  }
  .btn {
    ::v-deep {
      width: fit-content;
      font-size: 0.7em;
    }
  }
}
</style>
