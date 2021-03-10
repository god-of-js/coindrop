<template>
  <main>
    <payment-header />
    <div class="pa-5">
      <router-view />
    </div>
  </main>
</template>

<script>
import PaymentHeader from "@/components/payment/PaymentHeader.vue";
export default {
  components: {
    PaymentHeader
  }
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
}
</style>
