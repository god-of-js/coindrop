<template>
  <div class="notification-card mt-6">
    <header class="d-flex justify-space-between align-center">
      <h3 class="pa-3 pb-0">Notifications</h3>
      <router-link class="router-link pr-3" to="/notifications"
        >See all notifications</router-link
      >
    </header>
    <ul class="ma-0 pa-0">
      <li
        v-for="(notification, index) in notifications"
        :key="index"
        class="pa-3"
      >
        <div class="not-header">
          <b>{{ notification.header }}</b>
        </div>
        <div class="not-text">{{ notification.text }}</div>
        <div class="date">
          {{ returnDateAndTime(notification.createdAt) }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import dateFormatter from "@/mixins/dateFormatter.js";
export default {
  mixins: [dateFormatter],
  computed: {
    notifications() {
      return this.$store.state.notifications.notifications.slice(0, 3);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/mixins.scss";
.notification-card {
  background-color: $primary-white;
  @include box-shadow();
  li {
    list-style-type: none;
  }
  header {
    border-bottom: 1px solid $border-color;
  }
  .not-header {
    font-size: 1.1em;
    font-weight: bold;
  }
  .not-text {
    font-size: 0.8em;
  }
  .date {
    font-size: 0.8em;
    text-align: right;
  }
  .router-link {
    font-size: 0.8em;
  }
}
</style>
