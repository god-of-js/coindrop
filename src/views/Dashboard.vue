<template>
  <main>
    <top-nav />
    <div class="d-flex">
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

<style lang="scss" scoped></style>
