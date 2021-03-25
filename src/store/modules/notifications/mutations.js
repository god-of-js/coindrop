export default {
  setNotification(state, notification) {
    state.notifications.unshift(notification);
  },
  setNotifications(state, notifications) {
    state.notifications = notifications;
  }
};
