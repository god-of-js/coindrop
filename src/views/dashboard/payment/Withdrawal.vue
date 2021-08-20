<template>
  <div class="deposit">
    <section class="reason pa-4">
      <!-- <pre>
        {{withdrawalRequest}}
      </pre> -->
      <p class="reason-text">
        {{
          withdrawalRequest.status === "pending"
            ? "Your request is yet to be validated. Keep an eye on your payment portfolio"
            : "your withdrawal has been confirmed. "
        }}
      </p>
    </section>
    <section class="mt-4 fields pa-4">
      <div class="pb-3">
        <b>Status: </b> <span>{{ withdrawalRequest.status }} </span>
      </div>
      <div class="pb-3">
        <b>Transfered Amount: </b> <span>{{ (withdrawalRequest.amount).toLocaleString() }} </span>
      </div>
      <div class="pb-3">
        <b>Crypto Address: </b>
        <span>{{ withdrawalRequest.cryptoAddress }} </span>
      </div>
      <div class="pb-3">
        <b>Coin used for payment: </b>
        <span>{{ withdrawalRequest.coin }} </span>
      </div>
      <div class="pb-3">
        <b>Date of Transaction: </b>
        <span>{{ returnDate(withdrawalRequest.createdAt) }} </span>
      </div>
    </section>
  </div>
</template>

<script>
import dateFormatter from "@/mixins/dateFormatter.js";
export default {
  mixins: [dateFormatter],
  computed: {
    withdrawalRequest() {
      return this.$store.state.payment.withdrawalRequest;
    }
  },
  mounted() {
    this.$store.dispatch("payment/getWithdrawalRequest", {
      id: this.$route.params.id
    });
  },
  //methods: {
   // returnDate(date) {
     // const data = new Date(date);
     // return `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`;
    //}
  //}
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
