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
        md="3"
        class="ma-1"
        lg="3"
        v-for="(plan, index) in plans"
        :key="index"
      >
        <plan :plan="plan"
      /></v-col>
    </v-row>
  </div>
</template>

<script>
import Plan from "./Plan";
import { plans } from "@/helpers/plans.js";
export default {
  components: {
    Plan
  },
  data() {
    return {
      plans
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
