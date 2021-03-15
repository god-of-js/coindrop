<template>
  <div>
    <div class="d-flex justify-end">
      <custom-button class="btn" @click="openRequestModal">Request Withdrawal</custom-button>
    </div>
    <withdrawals />
  </div>
</template>

<script>
export default {
  components: {
    Withdrawals: () => import("@/components/payment/Withdrawals"),
  },
  methods: {
    openRequestModal() {
      this.$store.commit("modal/setActiveModal", {
        activeModal: "RequestModal",
        modalIsActive: true,
        commonData: {},
      });
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  #btn {
    width: fit-content;
  }
}
</style>
