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
          url: "/settings/payment-details",
          name: "Change Payment Details"
        },
        {
          url: "/payment/withdraw",
          name: "Profile"
        },
        {
          url: "/payment/plans",
          name: "Upgrade"
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
