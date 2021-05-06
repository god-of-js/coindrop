<template>
  <main>
    <top-nav />
    <div class="d-flex dashboard-content">
      <side-nav v-if="!smallScreen" />
      <div :class="!smallScreen ? 'half-width mx-auto' : 'mx-auto full-width'">
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
  mounted() {
    this.$store.dispatch("tasks/getTasks");
    this.$store.dispatch("notifications/getNotifications");
  },
  computed: {
    modalIsActive() {
      return this.$store.state.modal.modalIsActive;
    },
    smallScreen() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";
@import "../assets/styles/sizes.scss";
main {
  position: relative;
  // padding-bottom: 13%;
}
.dashboard-content {
  background: $secondary-background;
  .half-width {
    width: 80%;
  }
  .full-width {
    width: 100%;
  }
}
</style>
