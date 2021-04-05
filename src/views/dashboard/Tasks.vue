<template>
  <div class="tasks">
    <header class="pa-3">
      <h1>Tasks</h1>
    </header>
    <ul class="tasks-container ma-6 pl-0">
      <li v-for="(task, index) in 5" :key="index" class="pa-4">
        <h2 class="pb-0 mb-0">Account Verification</h2>
        <p>
          Verify your account by heading to the verify account part of the
          dashboard.
        </p>
        <router-link to="/task/1" class="see-more">See more</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tasks",
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
