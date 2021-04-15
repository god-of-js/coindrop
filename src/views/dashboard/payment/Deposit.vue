<template>
  <div class="deposit">
    <section class="reason pa-4">
      <p class="reason-text">
        {{
          claimedPayment.status === "pending"
            ? "Your payment is yet to be validated. Keep an eye on your portfolio"
            : claimedPayment.reason
        }}
      </p>
    </section>
    <section class="mt-4 fields pa-4">
      <div class="pb-3">
        <b>Status: </b> <span>{{ claimedPayment.status }} </span>
      </div>
      <div class="pb-3">
        <b>Upgrade Type: </b> <span>{{ claimedPayment.upgradeType }} </span>
      </div>
      <div class="pb-3">
        <b>Coin used for payment: </b> <span>{{ claimedPayment.coin }} </span>
      </div>
      <div class="pb-3">
        <b>Date of Transaction: </b>
        <span>{{ returnDateAndTime(claimedPayment.createdAt) }} </span>
      </div>
    </section>
  </div>
</template>

<script>
import dateFormatter from "@/mixins/dateFormatter.js";
export default {
  mixins: [dateFormatter],
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

<style lang="scss" scoped>
@import "../../../assets/styles/colors.scss";
@import "../../../assets/styles/mixins.scss";
.deposit {
  .reason {
    background: $primary-white;
    @include box-shadow();
    box-sizing: border-box;
  }
  .fields {
    background: $primary-white;
    @include box-shadow();
  }
}
</style>
