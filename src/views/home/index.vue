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
        With over 85,000 users currently mining on <b>{{ appName }}</b
        >and with over 20,000 daily active mining users,
        <b> {{ appName }}</b> mines crypto currency and
        <b>pays you in safemoon.</b>
      </p>
      <router-link to="/register">
        <custom-button class="pa-6"
          ><span>Start Mining</span> <v-icon></v-icon> </custom-button
      ></router-link>
    </section>
    <section class="d-flex pa-12  justify-space-between">
      <div :class="[smallScreen ? 'text-center' : '', 'col-lg-6 col-sm-12']">
        <h1>
          Why mine with <b>{{ appName }}</b>
        </h1>
        <p>
          We combine the processing power of thousands of computers to run
          complex distributed cryptocurrency computations. Mining crypto
          currency is difficult, hence we created this platform to simplify the
          process of mining from the safemoon eco-system.
          <b>{{ appName }}</b> works in the background and pays you based on the
          calculations done over a period of time.
        </p>
      </div>
      <img
        src="@/assets/images/image.png"
        alt="dashboard image"
        width="600"
        v-if="!smallScreen"
      />
    </section>
    <section class="plans pb-7">
      <plans />
    </section>
    <section class="plans pb-7">
      <how-to-get-started />
    </section>
  </main>
</template>

<script>
export default {
  components: {
    plans: () => import("@/components/payment/Plans.vue"),
    HowToGetStarted: () => import("@/components/home/HowToGetStarted")
  },
  computed: {
    appName() {
      return this.$store.state.app.appName;
    },
    smallScreen() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/sizes.scss";
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
  ::v-deep {
    #btn {
      width: fit-content;
    }
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
.mining-section {
  color: $primary-white;
  font-weight: bold;
  font-size: 1.7em;
}
@media screen and (max-width: $tablet-small-width) {
  .intro {
    padding: 3%;
    h1 {
      font-size: 2em;
    }
    .subtitle {
      font-size: 1.2em;
    }
    p {
      font-size: 0.9em;
    }
  }
}
</style>
