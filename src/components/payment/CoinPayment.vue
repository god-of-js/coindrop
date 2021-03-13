<template>
  <div class="coin-payment">
    <component :is="componentId" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentId: ""
    };
  }
};
</script>

<style lang="scss" scoped></style>
