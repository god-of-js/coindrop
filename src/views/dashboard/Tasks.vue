<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("tasks/getTasks");
  }
};
</script>

<style lang="scss" scoped></style>
