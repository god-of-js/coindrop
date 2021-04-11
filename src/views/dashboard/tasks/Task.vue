<template>
  <div class="task">
    <header class="pa-4 ma-4">
      <h2>{{ task.header }}</h2>
    </header>
    <div class="content ma-4 pa-4">
      <p>{{ task.text }}</p>
      <div class="d-flex justify-space-between pt-5">
        <a :href="task.action" v-if="task.nextRoute" target="_blank"
          >View Document</a
        >
        <router-link :to="task.action" class="see-more" v-if="task.action"
          >Take Action</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    task() {
      return this.$store.state.tasks.task;
    }
  },
  mounted() {
    this.$store.dispatch("tasks/getTask", { id: this.$route.params.id });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
@import "@/assets/styles/mixins.scss";
.task {
  width: 100%;
  header {
    background: $primary-white;
    @include box-shadow();
  }
  .content {
    background: $primary-white;
    @include box-shadow();
  }
}
</style>
