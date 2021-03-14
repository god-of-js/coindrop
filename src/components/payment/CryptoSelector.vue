<template>
  <v-select
    :items="items"
    label="Select Coin to pay with"
    class="mt-4"
    dense
    outlined
    v-model="coin"
    @any="$emit('selectedcoin', coin)"
  ></v-select>
</template>

<script>
export default {
  data: () => ({
    items: ["BTC", "ETH"],
    coin: "BTC"
  }),
  watch: {
    coin() {
      this.$emit("selectedcoin", this.coin);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
label {
  font-size: 0.8em;
  color: $text-grey;
}
#select {
  width: 100%;
  padding: 5px;
  border: 1px solid $border-color;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}
.option {
  outline: none;
  width: 100%;
}
</style>
