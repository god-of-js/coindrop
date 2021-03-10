<template>
  <div class="deposit pa-5">
    <button-navigators :routeArr="routeArr"></button-navigators>
  </div>
</template>

<script>
import ButtonNavigators from "@/components/navigation/ButtonNavigators.vue";
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
    ButtonNavigators
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
