<template>
  <div class="referrals mt-4 pa-5">
    <h4>Referrals</h4>
    <v-simple-table fixed-header height="360px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Registration Date</th>
            <th class="text-left">Hash Rate</th>
            <th class="text-left">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(referral, index) in referrals" :key="index">
            <td>{{ referral.email }}</td>
            <td>{{ returnDate(referral.createdAt) }}</td>
            <td>{{ referral.hashRate }}</td>
            <td>&#x24;{{ referral.balance }}</td>
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
    referrals() {
      return this.$store.state.refferals.referrals;
    }
  },
  mounted() {
    this.$store.dispatch("refferals/getRefferals");
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
</style>
