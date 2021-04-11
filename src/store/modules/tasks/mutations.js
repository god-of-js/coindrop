export default {
  setUserTasks(state, tasks) {
    console.log(typeof tasks, "rt");
    state.tasks.unshift(...tasks);
  },
  setTask(state, task) {
    state.task = task;
  }
};
