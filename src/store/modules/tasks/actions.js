import Pubnub from "@/plugins/pubnub";
import api from "@/plugins/api";
export default {
  async getTasks({ rootState, commit }) {
    let request = await api(rootState.user.user.JWT).get(
      "/tasks/tasks/" + rootState.user.user._id
    );
    commit("setUserTasks", request.data.data.reverse());
  },
  async getTask({ rootState, commit }, {id}) {
    console.log(id);
    let request = await api(rootState.user.user.JWT).get(
      "/tasks/task/" + id
    );
    console.log(request.data.data)
    commit("setTask", request.data.data);
  },
  subscribeToPubNub({ rootState, commit }) {
    const pubnub = Pubnub();
    pubnub.subscribe({
      channels: [`task-${rootState.user.user._id}`]
    });
    pubnub.addListener({
      message: task => {
        commit("setUserTasks", [task.message]);
      }
    });
  },
};
