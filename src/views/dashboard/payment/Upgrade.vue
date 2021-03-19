<template>
  <div class="deposit pa-5">
    <v-row class="d-flex justify-space-between">
      <v-col sm="12" lg="5" md="5">
        <v-col lg="10"> <crypto-selector @selectedcoin="changeCoin"/></v-col>
        <deposit-tips />
      </v-col>
      <v-col sm="12" lg="6" md="6">
        <coin-payment :componentId="componentId" />
        <custom-button
          class="mt-4"
          :loading="loading"
          @click="finishTransaction"
          >I have completed the transaction</custom-button
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
      componentId: "",
      loading: false
    };
  },
  components: {
    CryptoSelector,
    DepositTips,
    CoinPayment
  },
  mounted() {
    this.componentId = this.$route.params.crypto;
  },
  methods: {
    changeCoin(coin) {
      this.$router.push(`/payment/upgrade/${this.$route.params.type}/${coin}`);
      this.componentId = coin;
    },
    async finishTransaction() {
      this.loading = true;
      const type = this.$route.params.type;
      const plan = plans.filter(plan => plan.type === type);
      const data = {
        upgradeType: type,
        coin: this.$route.params.coin,
        amount: plan[0].price
      };
      await this.$store.dispatch("payment/claimPayment", data);
      this.loading = false;
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
