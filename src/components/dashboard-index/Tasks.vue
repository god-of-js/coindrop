<template>
  <div class="task-center">
    <header class="d-flex align-center justify-space-between pa-3 pb-1 mb-1">
      <h4>Tasks</h4>
      <router-link to="/tasks">
        <small>
          See all
          <v-icon class="icon" color="#212833">mdi-chevron-right</v-icon></small
        ></router-link
      >
    </header>
    <ul class="tasks ma-0 pa-0">
      <li v-for="(task, index) in tasks" class="task pa-4" :key="index">
        <p class="ma-0">{{ task.header }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import dateFormatter from "@/mixins/dateFormatter.js";
export default {
  mixins: [dateFormatter],
  computed: {
    tasks() {
      return this.$store.state.tasks.tasks;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/mixins.scss";
.task-center {
  background: $primary-white;
  @include box-shadow();
  header {
    border-bottom: 1px solid $border-color;
  }
  li {
    list-style: none;
  }
  .task {
    border-bottom: 1px solid $border-color;
    font-size: 0.9em;
    height: fit-content;
    .date {
      float: right;
      font-size: 0.8em;
      color: $text-grey;
    }
  }
}
</style>
