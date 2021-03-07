<template>
  <div class="task-center">
    <header class="d-flex align-center justify-space-between pa-3 pb-1 mb-1">
      <h4>Tasks</h4>
      <v-icon class="icon" color="#212833">mdi-chevron-right</v-icon>
    </header>
    <ul class="tasks ma-0 pa-0">
      <li v-for="(task, index) in 3" class="task mb-1" :key="index">
        <p class="pa-4 ma-0">Upgrade account to stallion</p>
        <div class="date">12/12/2021</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
    font-size: 0.8em;
    height: fit-content;
    .date {
      float: right;
    }
  }
}
</style>
