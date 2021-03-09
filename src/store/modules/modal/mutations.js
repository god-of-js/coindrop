export default {
  setActiveModal(state, params) {
    state.activeModal = params.activeModal ?? "";
    state.modalIsActive = params.modalIsActive ?? false;
    state.commonData = params.commonData ?? {};
  }
};
