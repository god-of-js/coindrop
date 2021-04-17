<template>
  <div class="about pt-16">
    <v-col md="8" class="mx-auto" sm="11">
      <h1 class="text-center">FAQ's</h1>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item, i) in 5" :key="i" class="mt-5">
          <v-expansion-panel-header>Item</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </div>
</template>
<script>
export default {
  name: "FAQs",
  computed: {
    appName() {
      return this.$store.state.app.appName;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.about {
  background: $secondary-background;
  color: $primary-white;
  min-height: 100vh;
  height: 100%;
  h1 {
    color: $gold-text;
    font-weight: bold;
    font-size: 2em;
    text-transform: uppercase;
  }
}
</style>
