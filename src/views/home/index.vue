<template>
  <main class="home">
    <section class="intro d-flex justify-center flex-column align-center">
      <h1 class="text-center">Mine crypto currencies</h1>
      <span class="">Join one of the world's best crypto mining sites.</span>
      <router-link to="/register">
        <custom-button class="pa-6">Register Now</custom-button></router-link
      >
    </section>
    <section class="cryptorates pb-7">
      <crypto-rates></crypto-rates>
    </section>
    <section>
      <get-in-touch />
    </section>
    <section
      class="actions mt-6 d-flex justify-center align-center flex-column"
    >
      <h1 class="mining-section">Choose Mining Option</h1>
      <div class="d-flex">
        <custom-button class="ma-4 mr-2 pl-4 pr-4"
          >Mine Crypto Now</custom-button
        >
        <custom-button class="ma-4 ml-2 pl-4 pr-4"
          >Increase Hash Rate</custom-button
        >
      </div>
    </section>
  </main>
</template>

<script>
export default {
  components: {
    CryptoRates: () => import("@/components/home/CryptoRates.vue"),
    GetInTouch: () => import("@/components/home/GetInTouch.vue")
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
.actions {
  background: $primary-dark-color;
  min-height: 30vh;
}
.mining-section {
  color: $primary-white;
  font-weight: bold;
  font-size: 1.7em;
}
::v-deep {
  #btn {
    width: fit-content;
  }
}
</style>
