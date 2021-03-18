<template>
  <div>
    <h4>Withdraw Balance</h4>
    <p>
      Withdraw your balance to a crypto wallet of your choice using our accepted
      coins.
    </p>
    <form action="" class="mt-4" @submit.prevent="makeRequest">
      <custom-input
        class="mt-2"
        :label="'Amount to withdraw'"
        :inputType="'number'"
        :requiredInput="true"
        @data="(e) => (data.amount = e)"
      />
      <custom-input
        class="mt-2"
        :label="'Crypto Address'"
        :inputType="'text'"
        :requiredInput="true"
        @data="(e) => (data.cryptoAddress = e)"
      />
      <crypto-selector @selectedcoin="(e) => (data.coin = e)" />
      <custom-button class="mt-4" :inactive="checkValues" :loading="loading"
        >Withdraw Funds
      </custom-button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      data: {
        coin: "BTC",
        cryptoAddress: null,
        amount: null,
      },
      loading: false,
    };
  },
  components: {
    cryptoSelector: () => import("@/components/payment/CryptoSelector.vue"),
  },
  computed: {
    checkValues() {
      return !this.data.amount || !this.data.cryptoAddress;
    },
  },
  methods: {
    makeRequest() {
      this.loading = true;
      this.data.amount = Number(this.data.amount);
      console.log(typeof this.data.amount);
      this.$store.dispatch("payment/requestWithdrawal", this.data);
      this.loading = false;
    },
    selectCoin(e) {
      this.data.coin = e;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 0.9em;
}
</style>
