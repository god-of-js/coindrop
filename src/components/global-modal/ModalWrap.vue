<template>
  <v-dialog
    id="modal"
    v-model="modalIsActive"
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
    modalIsActive() {
      return this.$store.state.modal.modalIsActive;
    },
    dialog: {
      get() {
        return this.modalIsActive;
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
