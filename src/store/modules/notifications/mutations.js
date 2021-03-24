export default {
    setNotification(state, notification) {
        state.notifications.unshift(notification);
    }
};
