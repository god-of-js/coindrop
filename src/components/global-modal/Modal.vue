<template>
  <main>
    <modal-wrap>
      <div class="modal-card pa-5">
        <button @click="closeModal">
          <v-icon color="rgb(220, 20, 60)">mdi-close</v-icon>
        </button>
        <component :is="activeModal" />
      </div>
    </modal-wrap>
  </main>
</template>

<script>
import ModalWrap from "./ModalWrap";
import components from "./Components";
export default {
  components: {
    ModalWrap,
    ...components
  },
  computed: {
    activeModal() {
      return this.$store.state.modal.activeModal;
    }
  },
  methods: {
    closeModal() {
      this.$store.commit("modal/setActiveModal", {});
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
.modal-card {
  background: $primary-white;
  border-radius: 5px;
}
button {
  background: $primary-red;
  border-radius: 2px;
  float: right;
  outline: none;
}
</style>
