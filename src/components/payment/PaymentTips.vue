<template>
  <div class="payment-tips pa-5">
    <header class="d-flex align-center">
      <v-icon>mdi-lightbulb-on</v-icon>
      <h3 class="pa-0 ma-0 pl-3">Tips</h3>
    </header>
    <ul>
      <li>Account upgrade would be visible after verification.</li>
      <li>Until confirmation is made, the upgrade won't be visible.</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
.payment-tips {
  background: $border-color;
  border-radius: 7px;
}
</style>
