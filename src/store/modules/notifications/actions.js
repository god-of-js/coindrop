import Pubnub from "@/plugins/pubnub";
import api from "@/plugins/api";
export default {
  subscribeToPubNub({ rootState, commit }) {
    console.log(rootState.user.user._id);
    const pubnub = Pubnub();
    pubnub.subscribe({
      channels: [`notifications-${rootState.user.user._id}`]
    });
    pubnub.addListener({
      message: notification => {
        commit("setNotification", notification.message);
      }
    });
  },
  getNotifications({ commit, rootState }) {
    api(rootState.user.user.JWT)
      .get(`/notifications/notifications/${rootState.user.user._id}`)
      .then(result => {
        console.log(result.data.data);
        commit("setNotifications", result.data.data);
      });
  }
};
