<template>
  <div class="referrals mt-4 pa-5">
    <h4>Withdrawals</h4>
    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Upgrade type</th>
            <th class="text-left">Platform</th>
            <th class="text-left">Date of request</th>
            <th class="text-left">Status</th>
            <th class="text-left">View More</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(payment, index) in claimedPayments" :key="index">
            <td>{{ payment.upgradeType }}</td>
            <td>{{ payment.coin }}</td>
            <td>{{ returnDate(payment.createdAt) }}</td>
            <td>{{ payment.status }}</td>
            <td>
              <router-link :to="`/payment/deposits/${payment._id}`" class="link"
                >View more</router-link
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import dateFormatter from "@/mixins/dateFormatter.js";
export default {
  mixins: [dateFormatter],
  computed: {
    claimedPayments() {
      return this.$store.state.payment.claimedPayments;
    }
  },
  mounted() {
    this.$store.dispatch("payment/getClaimedPayments");
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/mixins.scss";
.referrals {
  background: $primary-white;
  margin: auto;
  @include box-shadow();
}
.link {
  font-size: 0.8em;
}
</style>
