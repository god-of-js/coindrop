<template>
  <main>
    <top-nav />
    <div>
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  components: {
    TopNav: () => import("@/components/dashboard-layout-components/TopNav.vue")
  }
};
</script>

<style lang="scss" scoped></style>
