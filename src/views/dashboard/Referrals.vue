<template>
  <main class="pa-3">
    <referral-action-card />
  </main>
</template>

<script>
import ReferralActionCard from "../../components/referrals/ReferralActionCard.vue";
export default {
  components: {
    ReferralActionCard
  }
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
}
.row {
  box-sizing: border-box;
}
</style>
