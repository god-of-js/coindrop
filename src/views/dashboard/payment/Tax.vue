<template>
  <div class="pay-tax pa-5">
    <header class="pa-4  mb-4 pb-2">
      <h2>Tax Payment</h2>
    </header>
    <upgrade :routeHead="`/payment/pay-tax/${getTaxId}`" />
  </div>
</template>

<script>
import Upgrade from "./Upgrade";
export default {
  name: "Tax",
  components: {
    Upgrade
  },
  mounted() {
    this.$store.dispatch("tax/getTax", { id: this.$route.params.id });
  },
  computed: {
    getTaxId() {
      return this.$route.params.id;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
@import "@/assets/styles/mixins.scss";
.pay-tax {
  width: 100%;
  header {
    background: $primary-white;
    @include box-shadow();
  }
}
</style>
