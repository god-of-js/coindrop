<template>
  <div
    class="get-in-touch-card pa-5 d-flex flex-column align-center justify-center"
  >
    <v-avatar class="avatar mx-auto" size="70">
      <v-icon color="#cfd2d4" size="30">{{ icon }}</v-icon>
    </v-avatar>
    <h2 class="mt-4">{{ headline }}</h2>
    <p class="text-center">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    headline: {
      type: String
    },
    icon: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/mixins.scss";
.get-in-touch-card {
  background: $primary-white;
  width: 100%;
  // border-radius: 7px;
  min-height: 270px;
  @include box-shadow();
  .avatar {
    border: 1px solid $border-color;
  }
  p {
    font-size: 1em;
  }
}
</style>
