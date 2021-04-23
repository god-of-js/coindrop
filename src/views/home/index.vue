<template>
  <main class="home">
    <section class="intro d-flex justify-center flex-column align-center">
      <img
        src="@/assets/images/safemoon-logo.gif"
        alt="safemoon logo"
        width="150"
      />
      <h1 class="text-center">Mine the safemoon crypto currency</h1>
      <span class="subtitle text-center"
        >Join the first safemoon crypto mining site.</span
      >
      <p class="col-lg-4 col-md-4 text-center">
        With over 85,000 users currently minning on <b>{{ appName }}</b
        >. And with over 20,000 daily active minning users.
      </p>
      <router-link to="/register">
        <custom-button class="pa-6"
          ><span>Start Mining</span> <v-icon></v-icon> </custom-button
      ></router-link>
    </section>
    <section class="cryptorates pb-7">
      <crypto-rates></crypto-rates>
    </section>
    <section class="pb-4">
      <get-in-touch />
    </section>
  </main>
</template>

<script>
export default {
  components: {
    CryptoRates: () => import("@/components/home/CryptoRates.vue"),
    GetInTouch: () => import("@/components/home/GetInTouch.vue"),
  },
  computed: {
    appName() {
      return this.$store.state.app.appName;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
.home {
  background: $secondary-background;
}
.intro {
  background: $primary-dark-color;
  min-height: 100vh;
  h1 {
    color: $primary-white;
    font-size: 2.5em;
    margin-bottom: 0px;
  }
  .subtitle {
    font-size: 1.5em;
    font-weight: bold;
    color: $text-grey;
  }
  p {
    color: $text-grey;
    font-size: 1em;
  }
}
.actions {
  background: $primary-dark-color;
  min-height: 30vh;
}
.mining-section {
  color: $primary-white;
  font-weight: bold;
  font-size: 1.7em;
}
::v-deep {
  #btn {
    width: fit-content;
  }
}
</style>
