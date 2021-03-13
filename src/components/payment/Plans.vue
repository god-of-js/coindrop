<template>
  <div class="pa-5 plans">
    <h1 class="text-center">Plans</h1>
    <p class="text-center">
      Plans help us serve you better by pinpointing the exact service you need.
      and also helps keep us running
    </p>
    <v-row class="pt-8 d-flex justify-center">
      <v-col
        sm="12"
        md="4"
        lg="3"
        v-for="(plan, index) in plans"
        :key="index"
        class="ma-1"
      >
        <plan :plan="plan"
      /></v-col>
    </v-row>
  </div>
</template>

<script>
import Plan from "./Plan";
export default {
  components: {
    Plan
  },
  data() {
    return {
      plans: [
        {
          title: "Free Contract",
          price: "0",
          btnTxt: "",
          type: "free",
          advantages: [
            "Hash Rate of 2 btc",
            "Mine bitcoin daily",
            "Plan duration of 1 day",
            "Asset Protection",
            "Minimum withdrawal of 1btc"
          ]
        },
        {
          title: "Average Contract",
          price: "50",
          type: "average",
          advantages: [
            "Hash Rate of 2 btc",
            "Mine bitcoin daily",
            "Plan duration of 1 day",
            "Asset Protection",
            "Minimum withdrawal of 1btc"
          ]
        },
        {
          title: "Standard Contract",
          price: "500",
          type: "standard",
          advantages: [
            "Hash Rate of 2 btc",
            "Mine bitcoin daily",
            "Plan duration of 1 day",
            "Asset Protection",
            "Minimum withdrawal of 1btc"
          ]
        },
        {
          title: "Retirement Contract",
          price: "500",
          type: "retirement",
          advantages: [
            "Hash Rate of 2 btc",
            "Mine bitcoin daily",
            "Plan duration of 1 day",
            "Asset Protection",
            "Minimum withdrawal of 1btc"
          ]
        },
        {
          title: "Enterprise Contract",
          price: "500",
          type: "enterprise",
          advantages: [
            "Hash Rate of 2 btc",
            "Mine bitcoin daily",
            "Plan duration of 1 day",
            "Asset Protection",
            "Minimum withdrawal of 1btc"
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.plans {
  width: 100%;
  h1 {
    font-weight: bold;
  }
}
</style>
