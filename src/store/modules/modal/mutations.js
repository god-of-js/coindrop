export default {
  setActiveModal(state, params) {
    state.activeModal = params.activeModal;
    state.modalIsActive = params.modalIsActive;
    state.commonData = params.commonData;
  },
  closeModal(state) {
    state.activeModal = "";
    state.modalIsActive = false;
    state.commonData = {};
  }
};
