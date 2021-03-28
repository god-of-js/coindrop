import api from "@/plugins/api";
export default {
  async getTasks({ rootState }) {
    let request = await api(rootState.user.user.JWT).get(
      "/tasks/tasks/" + rootState.user.user._id
    );
    console.log(request.data.data);
  }
};
