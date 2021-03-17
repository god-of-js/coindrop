<template>
  <div></div>
</template>

<script>
export default {
  computed: {
    claimedPayment() {
      return this.$store.state.payment.claimedPayment;
    }
  },
  mounted() {
    this.$store.dispatch("payment/getClaimedPayment", {
      id: this.$route.params.id
    });
  }
};
</script>

<style lang="scss" scoped></style>
