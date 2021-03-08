<template>
  <div>
    <modal-wrap>
      <component :is="activeModal" />
    </modal-wrap>
  </div>
</template>

<script>
import ModalWrap from "./ModalWrap";
export default {
  components: {
    ModalWrap
  },
  computed: {
    activeModal() {
      return this.$store.state.modal.activeModal;
    }
  }
};
</script>

<style lang="scss" scoped></style>
