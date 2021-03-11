<template>
  <main class="authentication">
    <top-nav />
    <div class="authentication__card-container">
      <div class="authentication__card">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  components: {
    TopNav: () => import("@/components/authentication/TopNav.vue")
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";
@import "../assets/styles/mixins.scss";
@import "../assets/styles/sizes.scss";
.authentication {
  background-color: $secondary-background;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  &__card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    height: 100%;
  }
  &__card {
    background: $primary-white;
    width: 30%;
    padding: 20px;
    @include box-shadow();
  }
}
@media screen and (max-width: $tablet) {
  .authentication {
    &__card {
      width: 35%;
    }
  }
}
@media screen and (max-width: $tablet-small-width) {
  .authentication {
    &__card {
      width: 45%;
    }
  }
}
@media screen and (max-width: $mobile) {
  .authentication {
    &__card {
      width: 80%;
    }
  }
}
</style>
