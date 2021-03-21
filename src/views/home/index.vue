<template>
  <div class="home">
    <section class="intro d-flex justify-center flex-column align-center">
      <h1 class="text-center">Mine crypto currencies</h1>
      <span class="">Join one of the world's best crypto mining sites.</span>
      <custom-button class="pa-6">Register Now</custom-button>
    </section>
    <section class="cryptorates">
      <crypto-rates></crypto-rates>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    CryptoRates: () => import("@/components/home/CryptoRates.vue")
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
.home {
  background: $secondary-background;
}
.intro {
  background: $primary-dark-color;
  min-height: 60vh;
  h1 {
    color: $primary-white;
    font-size: 2.5em;
    margin-bottom: 0px;
  }
  span {
    font-size: 1.5em;
    font-weight: bold;
    color: $text-grey;
    margin-bottom: 15px;
  }
}
::v-deep {
  #btn {
    width: fit-content;
  }
}
</style>
