<template>
  <div>
    <deposits />
  </div>
</template>

<script>
export default {
  components: { Deposits: () => import("@/components/payment/Deposits") }
};
</script>

<style lang="scss" scoped></style>
