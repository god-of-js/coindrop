<template>
  <div class="coin-payment pa-5 mt-5">
    <component :is="componentId" />
  </div>
</template>

<script>
import BTC from "./coins/BTC";
export default {
  props: {
    componentId: {
      type: String,
      default: "BTC",
    },
  },
  components: {
    BTC,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/mixins.scss";
.coin-payment {
  background: $primary-white;
  @include box-shadow();
  border-radius: 7px;
}
</style>
