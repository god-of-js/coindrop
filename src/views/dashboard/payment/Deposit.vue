<template>
  <div class="deposit pa-5">
    <button-navigators :routeArr="routeArr"></button-navigators>
    <v-row>
      <v-col sm="12" lg="5" md="6"> <crypto-selector></crypto-selector></v-col>
      <v-col sm="12" lg="5" md="6"> <crypto-selector></crypto-selector></v-col>
    </v-row>
  </div>
</template>

<script>
import ButtonNavigators from "@/components/navigation/ButtonNavigators.vue";
import CryptoSelector from "@/components/payment/CryptoSelector.vue";
export default {
  data: () => {
    return {
      routeArr: [
        {
          name: "Crypto",
          url: "/payment/deposit/crypto"
        }
      ]
    };
  },
  components: {
    ButtonNavigators,
    CryptoSelector
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
