<template>
  <div class="pa-5 plans">
    <h1 class="text-center">Select Plan</h1>
    <v-row class="pt-8 d-flex justify-center">
      <v-col
        sm="6"
        xs="12"
        md="4"
        cols="12"
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
