<template>
  <main>
    <top-nav />
    <div class="d-flex dashboard-content">
      <side-nav />
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  components: {
    TopNav: () => import("@/components/dashboard-layout-components/TopNav.vue"),
    SideNav: () =>
      import("@/components/dashboard-layout-components/SideNav.vue")
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";
.dashboard-content {
  background: $secondary-background;
}
</style>
