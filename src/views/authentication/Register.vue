<template>
  <main>
    <article>
      <h3 class="pa-1 ma-0">Create a free account</h3>
      <div class="mb-4 welcome-text">Welcome to {{ appName }}</div>
    </article>
    <form action="">
      <custom-input :label="'Email Address'" class="mt-2" />
      <custom-input :label="'Password'" class="mt-2" />
      <custom-input :label="'Referral Email(optional)'" class="mt-2" />
    </form>
  </main>
</template>

<script>
export default {
  computed: {
    appName() {
      return this.$store.state.app.appName;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
.welcome-text {
  color: $text-grey;
  font-size: 0.7em;
}
</style>
