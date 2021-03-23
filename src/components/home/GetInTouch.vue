<template>
  <div class="get-in-touch">
    <h1 class="text-center">Get In Touch</h1>
    <v-row class="d-flex justify-center">
      <v-col
        lg="4"
        md="6"
        sm="12"
        rows="12"
        v-for="(card, index) in getInTouch"
        :key="index"
        ><services-card
          :icon="card.icon"
          :headline="card.headline"
          :text="card.text"
      /></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      getInTouch: [
        {
          icon: "mdi-headset",
          headline: "24/7 online support",
          text:
            "When ever you have a problem, our support team would be online 24/7 to ensure you get clarification as soon and precise as possible."
        },
        {
          icon: "mdi-comment-question",
          headline: "FAQ's",
          text:
            "Questions we have been asked and questions you are probably about to ask are properly here."
        }
      ]
    };
  },
  components: {
    ServicesCard: () => import("./GetInTouchCard")
  },
  computed: {
    appName() {
      return this.$store.state.app.appName;
    }
  }
};
</script>

<style lang="scss" scoped>
.get-in-touch {
  width: 80%;
  margin: auto;
  h1 {
    font-weight: bold;
    font-size: 2em;
  }
  &-text {
    font-size: 1.5em;
  }
}
</style>
