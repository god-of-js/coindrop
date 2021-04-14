<template>
  <div class="pay-tax pa-5">
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
.pay-tax {
  width: 100%;
}
</style>
