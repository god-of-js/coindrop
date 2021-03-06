<template>
  <div class="authentication">
    <top-nav />
    <div class="authentication__card-container">
      <div class="authentication__card">
        <router-view></router-view>
      </div>
    </div>
  </div>
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
.authentication {
  background-color: $secondary-background;
  min-height: 100vh;
  height: 100%;
  &__card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    height: 100%;
  }
  &__card {
    background: $primary-white;
    width: 27%;
    padding: 20px;
    @include box-shadow();
  }
}
</style>
