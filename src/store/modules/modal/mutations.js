export default {
  setActiveModal(state, params) {
    state.activeModal = params ? params.activeModal : "";
    state.modalIsActive = params ? params.modalIsActive : false;
    state.commonData = params ? params.commonData : {};
  }
};
