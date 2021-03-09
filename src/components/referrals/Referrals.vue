<template>
  <div class="referrals mt-4 pa-5">
    <h4>Referrals</h4>
    <v-simple-table fixed-header height="360px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Registration Date</th>
            <th class="text-left">Total Deposit</th>
            <th class="text-left">Last Deposit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(referral, index) in referrals" :key="index">
            <td>{{ referral.name }}</td>
            <td>{{ referral.regDate }}</td>
            <td>&#x24;{{ referral.totalDeposit }}</td>
            <td>&#x24;{{ referral.lastDeposit }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      referrals: [
        {
          name: "Eze Henry",
          regDate: "2021-02-15 20:51:05",
          totalDeposit: "30000",
          lastDeposit: "30000"
        },
        {
          name: "Eze Henry",
          regDate: "2021-02-15 20:51:05",
          totalDeposit: "30000",
          lastDeposit: "30000"
        },
        {
          name: "Eze Henry",
          regDate: "2021-02-15 20:51:05",
          totalDeposit: "30000",
          lastDeposit: "30000"
        },
        {
          name: "Eze Henry",
          regDate: "2021-02-15 20:51:05",
          totalDeposit: "30000",
          lastDeposit: "30000"
        },
        {
          name: "Eze Henry",
          regDate: "2021-02-15 20:51:05",
          totalDeposit: "30000",
          lastDeposit: "30000"
        },
        {
          name: "Eze Henry",
          regDate: "2021-02-15 20:51:05",
          totalDeposit: "30000",
          lastDeposit: "30000"
        }
      ]
    };
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
