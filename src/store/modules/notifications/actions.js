import Pubnub from "@/plugins/pubnub";
export default {
        subscribeToPubNub({ rootState, commit }) {
            console.log(rootState.user.user._id);
            const pubnub = Pubnub();
            pubnub.subscribe({
              channels: [`notifications-${rootState.user.user._id}`]
            });
            pubnub.addListener({
              message: notification => {
                  console.log(notification);
                  alert(notification.message.text)
                commit("setNotification", notification.message);
              }
            });

    }
};
