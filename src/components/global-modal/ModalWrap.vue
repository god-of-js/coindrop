<template>
  <v-dialog
    id="modal"
    v-model="dialog"
    :fullscreen="fullscreen"
    max-width="400"
    overlay-color="rgba(55, 71, 79, 0.2)"
    overlay-opacity=".82"
    :retain-focus="false"
    scrollable
  >
    <slot />
  </v-dialog>
</template>

<script>
export default {
  name: "ModalWrap",
  computed: {
    activeModal() {
      return this.$store.state.modal.activeModal;
    },
    dialog: {
      get() {
        return !!this.activeModal;
      },
      set() {
        this.$store.commit("modal/setActiveModal", {});
      }
    },
    fullscreen() {
      return this.$vuetify.breakpoint.width <= 768;
    }
  }
};
</script>
