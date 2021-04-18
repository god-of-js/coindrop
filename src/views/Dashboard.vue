<template>
  <main>
    <top-nav />
    <div class="d-flex dashboard-content">
      <side-nav v-if="!smallScreen" />
      <div :class="!smallScreen ? 'half-width mx-auto' : ''">
        <router-view />
      </div>
    </div>
    <foot-nav v-if="smallScreen" />
    <modal v-if="modalIsActive" />
  </main>
</template>

<script>
export default {
  components: {
    TopNav: () => import("@/components/dashboard-layout-components/TopNav.vue"),
    FootNav: () =>
      import("@/components/dashboard-layout-components/FootNav.vue"),
    SideNav: () =>
      import("@/components/dashboard-layout-components/SideNav.vue"),
    modal: () => import("@/components/global-modal/Modal.vue")
  },
  computed: {
    modalIsActive() {
      return this.$store.state.modal.modalIsActive;
    },
    smallScreen() {
      return this.$vuetify.breakpoint.xs;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";
.dashboard-content {
  background: $secondary-background;
  .half-width {
    width: 80%;
  }
}
</style>
