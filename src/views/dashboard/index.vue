<template>
  <main class="pa-3">
    <welcome-card />
    <v-row class="row pt-5">
      <v-col cols="12" sm="12" xs="12" md="7" lg="8">
        <portfolio />
        <notification-card />
      </v-col>
      <v-col cols="12" sm="12" xs="12" md="5" lg="4">
        <refer-card class="mb-4" />
        <tasks />
      </v-col>
    </v-row>
  </main>
</template>

<script>
// import Vue from "vue";
export default {
  components: {
    WelcomeCard: () => import("@/components/dashboard-index/WelcomeCard.vue"),
    Portfolio: () => import("@/components/dashboard-index/Portfolio.vue"),
    Tasks: () => import("@/components/dashboard-index/Tasks.vue"),
    ReferCard: () => import("@/components/dashboard-index/ReferCard.vue"),
    NotificationCard: () =>
      import("@/components/dashboard-index/NotificationCard.vue")
  },
  mounted() {
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
main {
  margin: auto;
  margin-top: 0px;
}
.row {
  box-sizing: border-box;
}
</style>
