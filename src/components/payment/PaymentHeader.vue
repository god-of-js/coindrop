<template>
  <div class="payment-header pa-5 pb-0">
    <h4>Payments</h4>
    <div class="d-flex pt-4">
      <button-navigators :routeArr="routeArr" />
    </div>
  </div>
</template>

<script>
import ButtonNavigators from "../navigation/ButtonNavigators";
export default {
  data: () => {
    return {
      routeArr: [
        {
          url: "/payment/deposits",
          name: "Deposits"
        },
        {
          url: "/payment/withdraw",
          name: "Withdrawals"
        },
        {
          url: "/payment/plans",
          name: "Upgrade to increase Hash Rate"
        }
      ]
    };
  },
  components: {
    ButtonNavigators
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
.payment-header {
  background: $primary-white;
}
</style>
