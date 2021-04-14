<template>
  <div class="coin-payment pa-5 mt-5">
    <div>
      Crypto Currency: <b>{{ `${coinWallet.fullName}(${coinWallet.name})` }}</b>
    </div>
    <div class="copy-field mt-5">
      <span>Wallet Address</span>
      <div class="row mt-1 d-flex align-center mb-3">
        <input
          type="text"
          v-model="coinWallet.wallet"
          disabled
          class="col-8 mr-3"
          id="copy-item"
        />
        <custom-button  @click="initiateCopy">Copy wallet Address</custom-button>
      </div>
    </div>
    <small> Please ensure that you send only <b>{{ `${coinWallet.fullName}(${coinWallet.name})` }}</b> to this wallet address as sending of other coins may result to irreversible loss of coin.</small>
  </div>
</template>

<script>
import wallets from "@/helpers/wallets.js";
import copyToClipboard from "@/mixins/copyToClipboard.js";
export default {
  props: {
    presentCoin: {
      type: String,
      default: "BTC",
    },
  },
  mixins: [copyToClipboard],
  computed: {
    coinWallet() {
      return wallets.find((e) => this.presentCoin === e.name);
    },
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
  .copy-field {
    border-radius: 5px;
  }
  input {
    height: 38px;
    width: fit-content;
    min-width: 130px;
    padding-left: 6px;
    background: $primary-white;
    border-radius: 5px;
    outline: none;
    border: 1px solid $border-color;
    box-sizing: border-box;
    font-size: 0.8em;
    ::placeholder {
      color: $border-color;
    }
  }
  ::v-deep {
    button {
      width: fit-content !important;
    }
  }
}
</style>
