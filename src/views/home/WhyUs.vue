<template>
  <div class="why-us pt-16">
    <v-col md="8" class="mx-auto" sm="11">
      <h1 class="text-center">Why choose {{ appName }}</h1>
      <p>
        At {{ appName }}, we are dedicated to giving you the best services and
        profits with a focus on SafeMoon mining.
      </p>
      <p>
        Our mission is to promote the use and adoption of the SafeMoon crypto
        currency, increase the total number of blockchain users and at the same
        time create wealth for our dedicated users through the lucrative but
        volatile crypto market.
      </p>
      <p>
        We also combine the processing power of thousands of computers to run
        complex distributed cryptocurrency computations. Mining crypto currency
        is difficult, hence we created this platform to simplify the process of
        mining from the safemoon eco-system.
        <b>{{ appName }}</b> works in the background and pays you based on the
        calculations done over a period of time.
      </p>
      <section>
        <b>We create wealth for our users by</b>

        <ol>
          <li>Putting your investments in a lending pool e.g(Yearn Finance)</li>
          <li>
            The 5% of each safemoon transaction that is distributed back to its
            holders.
          </li>
          <li>
            passive rewards holders earn through static reflection as they watch
            their SafeMoon wallet balance grow indefinitely.
          </li>
          <li>
            Every trade contributes toward automatically generating liquidity
            locked within the PancakeSwap LP. We combine all this to bring you
            the most profitable platform that can generate a passive income
            within a specified period of time.
          </li>
        </ol>
      </section>
    </v-col>
  </div>
</template>
<script>
export default {
  name: "WhyUs",
  computed: {
    appName() {
      return this.$store.state.app.appName;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.why-us {
  background: $secondary-background;
  color: $primary-font-color;
  min-height: 100vh;
  height: 100%;
  h1 {
    color: $gold-text;
    font-weight: bold;
    font-size: 2em;
    text-transform: uppercase;
  }
}
</style>
