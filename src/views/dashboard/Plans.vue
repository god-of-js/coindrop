<template>
  <div class="plans">
    <plans />
  </div>
</template>

<script>
export default {
  components: {
    Plans: () => import("@/components/payment/Plans.vue")
  }
};
</script>

<style lang="scss" scoped>
.plans {
  width: 100%;
}
</style>
