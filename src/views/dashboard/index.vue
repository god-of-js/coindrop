<template>
  <main class="pa-3">
    <welcome-card />
    <v-row class="row pt-5">
      <v-col sm="12" md="7" lg="8"><portfolio /></v-col>
      <v-col sm="12" md="5" lg="4">
        <refer-card class="mb-4" />
        <tasks />
      </v-col>
    </v-row>
  </main>
</template>

<script>
export default {
  components: {
    WelcomeCard: () => import("@/components/dashboard-index/WelcomeCard.vue"),
    Portfolio: () => import("@/components/dashboard-index/Portfolio.vue"),
    Tasks: () => import("@/components/dashboard-index/Tasks.vue"),
    ReferCard: () => import("@/components/dashboard-index/ReferCard.vue")
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
}
.row {
  box-sizing: border-box;
}
</style>
