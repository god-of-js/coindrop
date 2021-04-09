import api from "@/plugins/api";
export default {
  async getTasks({ rootState, commit }) {
    let request = await api(rootState.user.user.JWT).get(
      "/tasks/tasks/" + rootState.user.user._id
    );
    console.log(request.data.data);
    commit("setUserTasks", request.data.data);
  }
};
