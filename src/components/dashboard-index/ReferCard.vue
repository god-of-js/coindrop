<template>
  <router-link
    to="/referrals"
    class="pa-3 refer-card d-flex align-center justify-space-between"
  >
    <p>
      <b>Refer your friends and get over 50% of your refferal's deposits.</b>
    </p>
    <v-icon class="icon" color="#212833">mdi-chevron-right</v-icon>
  </router-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/mixins.scss";
.refer-card {
  background: $primary-button-color;
  border-radius: 7px;
  cursor: pointer;
  font-size: 0.9em;
  color: $primary-font-color;
  text-decoration: none;
  @include box-shadow();
  p {
    margin: 0px;
    padding: 0px;
  }
}
</style>
