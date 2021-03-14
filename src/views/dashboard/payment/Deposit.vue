<template>
  <div class="deposit pa-5">
    <button-navigators :routeArr="routeArr"></button-navigators>
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
import ButtonNavigators from "@/components/navigation/ButtonNavigators.vue";
import CryptoSelector from "@/components/payment/CryptoSelector.vue";
import DepositTips from "@/components/payment/PaymentTips.vue";
import CoinPayment from "@/components/payment/CoinPayment.vue";
export default {
  data: () => {
    return {
      routeArr: [
        {
          name: "Crypto",
          url: "/payment/deposit/crypto"
        }
      ],
      componentId: "",
      loading: false
    };
  },
  components: {
    ButtonNavigators,
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
      console.log(this.$route);
      const data = {
        upgradeType: this.$route.params.type,
        cryptoPlatform: this.$route.params.crypto
      };
      await this.$store.dispatch("payment/paymentMade", data);
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
