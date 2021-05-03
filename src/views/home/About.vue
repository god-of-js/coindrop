<template>
  <div class="about pt-16">
    <v-col md="8" class="mx-auto" sm="11">
      <h1 class="text-center">About {{ appName }}</h1>
      <p>
        Welcome to {{ appName }}, we are dedicated to giving you the best
        services and profits with a focus on SafeMoon mining.
      </p>
      <p>
        Our mission is to promote the use and adoption of the SafeMoon crypto
        currency, increase the total number of blockchain users and at the same
        time create wealth for our dedicated users through the lucrative but
        volatile crypto market.
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
      <section>
        <b>How it works</b>
        <ul>
          <li>
            Sign up on the platform by signing up with the required information.
          </li>
          <li>
            Make a deposit into your wallet to start earning safemoon each day
            at a certain hashrate. Payment would be made in 5 coins which are
            btc, eth, xrp, safemoon and bnb while withdrawal would be in
            safemoon
          </li>
          <li>The amount of safemoon you earn depends on the chosen plan.</li>
          <li>
            Withdraw your accumulated safemoon(interest inclusive) after your
            investment period is complete.
          </li>
        </ul>
      </section>
      <section>
        <b>Prerequisites</b>
        <ul>
          <li>
            A verified crypto wallet to recieve your funds on withdrawal(We
            reccomend
            <a
              href="https://trustwallet.com/"
              target="_blank"
              rel="noopener noreferrer"
              >TrustWallet</a
            >
            )
          </li>
          <li>
            Capital for investment. (This capital would be used to generate
            profit according to your selected plan).
          </li>
        </ul>
      </section>
    </v-col>
  </div>
</template>
<script>
export default {
  computed: {
    appName() {
      return this.$store.state.app.appName;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.about {
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
