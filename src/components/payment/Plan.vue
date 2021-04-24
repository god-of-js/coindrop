<template>
  <div class="plan pa-3">
    <h2 class="text-center pa-0 ma-0">{{ plan.title }}</h2>
    <div class="price">&#36; {{ plan.price }}</div>
    <ul>
      <li
        v-for="(advantage, index) in plan.advantages"
        :key="index"
        class="pt-3 d-flex align-center"
      >
        <hr class="mr-4" />
        <span>{{ advantage }}</span>
      </li>
    </ul>
    <custom-button class="mt-8" @click="upgrade">Choose Plan</custom-button>
  </div>
</template>

<script>
export default {
  props: {
    plan: {
      type: Object
    }
  },
  data: () => {
    return {
      advantages: [
        "Hash Rate of 2 btc",
        "Mine bitcoin daily",
        "Plan duration of 1 day",
        "Asset Protection",
        "Minimum withdrawal of 1btc"
      ]
    };
  },
  methods: {
    upgrade() {
      if (this.$store.state.user.user)
        this.$router.push(`/payment/upgrade/${this.plan.type}`);
      else this.$router.push(`/payment/upgrade/${this.plan.nextRoute}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/mixins.scss";
.plan {
  background: $primary-white;
  width: 100%;
  @include box-shadow();
  h2 {
    color: $gold-text;
  }
  ul {
    padding: 0%;
    margin: 0%;
    li {
      list-style: none;
      color: $text-grey;
      font-size: 0.9em;
    }
  }
  .price {
    font-size: 1.6em;
    font-weight: bold;
  }
  hr {
    width: 3%;
    background-color: $border-color;
  }
}
</style>
