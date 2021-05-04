<template>
  <div class="about pt-16">
    <v-col md="8" class="mx-auto" sm="11">
      <h1 class="text-center">FAQ's</h1>
      <v-expansion-panels accordion>
        <v-expansion-panel
          v-for="(question, i) in questions"
          :key="i"
          class="mt-5"
        >
          <v-expansion-panel-header>{{
            question.question
          }}</v-expansion-panel-header>
          <v-expansion-panel-content v-html="question.answer" class="pl-6 pr-6">
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </div>
</template>
<script>
export default {
  name: "FAQs",
  data: () => {
    return {
      questions: [
        {
          question: "What coins do we accept?",
          answer:
            "We accept only BTC, ETH, XRP, Safemoon and BNB for transactions on our platform."
        },
        {
          question: "What coin would be used for payment.",
          answer:
            "coindrop is a platform focusing on the mining of the Safemoon coin. hence, payment would be done using only the Safemoon coin"
        },
        {
          question: "How can I recieve the Safemoon coin after withdrawal",
          answer:
            "During withdrawal, you would need to input a wallet address. This is the address where your Safemoon would be deposited.We reccomend making use of TrustWallet or any other wallet that accepts Safemoon"
        },
        {
          question: "How do I start earning",
          answer:
            "To start earning, you need to choose a plan and make payment after which you can start mining according to the Hashrate of the selected plan."
        },
        {
          question: "How do I make payment",
          answer:
            "Payment can be made on the payment section. and plans can be seen on the upgrade account tab in the payment section."
        }
      ]
    };
  },
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
