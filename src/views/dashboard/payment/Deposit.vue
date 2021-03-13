<template>
  <div class="deposit pa-5">
    <button-navigators :routeArr="routeArr"></button-navigators>
    <v-row class="d-flex justify-space-between">
      <v-col sm="12" lg="5" md="5">
        <v-col lg="10"> <crypto-selector /></v-col>
        <deposit-tips />
      </v-col>
      <v-col sm="12" lg="6" md="6">
        <coin-payment :componentId="componentId"/>
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
      componentId: ""
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
