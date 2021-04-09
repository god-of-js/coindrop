<template>
  <div class="tasks">
    <header class="pa-3">
      <h1>Tasks</h1>
    </header>
    <ul class="tasks-container ma-6 pl-0">
      <li v-for="(task, index) in tasks" :key="index" class="pa-4">
        <b class="pb-0 mb-0">{{ task.header }}</b>
        <p>
          {{ task.text }}
        </p>
        <router-link :to="task.nextRoute" class="see-more"
          >See more</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  computed: {
    tasks() {
      return this.$store.state.tasks.tasks;
    }
  },
  mounted() {
    this.$store.dispatch("tasks/getTasks");
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
@import "@/assets/styles/mixins.scss";
.tasks {
  width: 100%;
  header {
    background: $primary-white;
    @include box-shadow();
  }
  .tasks-container {
    background: $primary-white;
    @include box-shadow();
  }
  li {
    list-style: none;
    &:hover {
      background: $secondary-background;
    }
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .see-more {
      float: right;
      font-size: 0.9em;
    }
  }
}
</style>
