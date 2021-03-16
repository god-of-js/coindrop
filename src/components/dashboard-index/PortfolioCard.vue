<template>
  <div class="portfolio-card pa-3 text-center">
    <div v-text="value" />
    <p v-text="name" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number
    },
    name: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/mixins.scss";
.portfolio-card {
  background: $primary-white;
  font-size: 0.9em;
  @include box-shadow();
  div {
    height: 40px;
    font-size: 1.4em;
    font-weight: bold;
    color: $text-grey;
  }
}
</style>
