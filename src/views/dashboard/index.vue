<template>
  <main class="pa-3">
    <welcome-card />
    <v-row class="row pt-5">
      <v-col sm="12" md="7" lg="8"
        ><portfolio /> <notification-card></notification-card
      ></v-col>
      <v-col sm="12" md="5" lg="4">
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
    this.$store.dispatch("notifications/getNotifications");
    this.$store.dispatch("tasks/getTasks");
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
main {
  width: 80%;
  margin: auto;
  margin-top: 0px;
}
.row {
  box-sizing: border-box;
}
</style>
