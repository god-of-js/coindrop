<template>
  <div class="crypto-rates mt-7 mb-7">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Last Price</th>
            <th class="text-left">Symbol</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(market, index) in cryptoMarket"
            :key="index"
            class="pb-5 pt-5"
            id="table-row"
          >
            <td class="">
              {{ market.name }}
            </td>
            <td>&#36;{{ market.quote.USD.price.toFixed(2) }}</td>
            <td>{{ market.symbol }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  computed: {
    cryptoMarket() {
      return this.$store.state.app.cryptoMarket;
    }
  },
  mounted() {
    this.$store.dispatch("app/getCryptoMarket");
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
.crypto-rates {
  width: 80%;
  @include box-shadow();
  margin: auto;
}
</style>
