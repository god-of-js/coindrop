<template>
  <div :class="[!smallScreen ? 'pa-12' : 'pa-3']">
    <h1>How do I get started?</h1>
    <v-row>
      <v-col
        cols="12"
        md="6"
        sm="12"
        lg="6"
        v-for="(step, index) in steps"
        :key="index"
      >
        <div class="get-started-container d-flex">
          <div class="step-indicator pa-4 d-flex align-center justify-center">
            {{ index + 1 }}
          </div>
          <p class="pa-4">
            <b>{{ step.header }}. </b>{{ step.text }}
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HowToGetStarted",
  data: () => {
    return {
      steps: [
        {
          header: "Create an account",
          text:
            "After signing up or signing in, you would get full access to your dashboard. Here you would get the details of your transactions, notifications, refferals e.t.c."
        },
        {
          header: "Choose a plan",
          text:
            "After signing up, click the button on the dashboard that says increase hash rate to start mining. where you would be directed to choose a plan. This plan determines your hash rate and your hash rate determines your gain over a period of time."
        },
        {
          header: "Rest, and let us take care of the rest.",
          text:
            "After selecting your plan and making full payment, our system is designed to help you mine on the server without having to keep tabs open and taking up memory on your system. "
        },
        {
          header: "Withdrawal",
          text:
            "After your minimum withdrawable amount is reached, navigate to payment through the sidebar or click the withdraw button where you would withdraw your balance in the safemoon crypto currency to your safemoon wallet."
        }
      ]
    };
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
@import "@/assets/styles/colors.scss";
@import "@/assets/styles/mixins.scss";
.get-started-container {
  background: $primary-white;
  @include box-shadow();
  .step-indicator {
    background: $primary-button-color;
    width: 50px;
  }
}
</style>
