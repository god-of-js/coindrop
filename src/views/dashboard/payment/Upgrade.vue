<template>
  <div class="deposit pa-5">
    <v-row class="d-flex justify-space-between">
      <v-col sm="12" lg="5" md="5">
        <v-col lg="10"> <crypto-selector @selectedcoin="changeCoin"/></v-col>
        <deposit-tips />
      </v-col>
      <v-col sm="12" lg="6" md="6">
        <coin-payment :presentCoin="componentId" />
        <custom-button
          class="mt-4"
          :loading="loading"
          @click="finishTransaction"
          >I have completed the transaction</custom-button
        >
        <small class=""
          >Ensure that you have successfully completed the transaction before
          clicking the button above. <br />All transactions are subject to
          verification.</small
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CryptoSelector from "@/components/payment/CryptoSelector.vue";
import DepositTips from "@/components/payment/PaymentTips.vue";
import CoinPayment from "@/components/payment/CoinPayment.vue";
import { plans } from "@/helpers/plans.js";
export default {
  data: () => {
    return {
      componentId: "BTC",
      loading: false
    };
  },
  components: {
    CryptoSelector,
    DepositTips,
    CoinPayment
  },
  methods: {
    changeCoin(coin) {
      this.componentId = coin;
    },
    async claimTaxPayment() {
      const taxId = this.$route.params.id;
      try {
        await this.$store.dispatch("tax/payTax", taxId);
        this.loading = false;
      } catch (_) {
        this.loading = false;
      }
    },
    async upgrade() {
      const type = this.$route.params.type;
      const plan = plans.filter(plan => plan.type === type);
      const data = {
        upgradeType: type,
        coin: this.componentId,
        amount: plan[0].price
      };
      await this.$store.dispatch("payment/claimPayment", data);
      this.loading = false;
    },
    async finishTransaction() {
      this.loading = true;
      if (this.$route.name === "pay-task") {
        this.claimTaxPayment();
      } else {
        this.upgrade();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/colors.scss";
@import "../../../assets/styles/mixins.scss";
.deposit {
  background: $primary-white;
  @include box-shadow();
}
</style>
