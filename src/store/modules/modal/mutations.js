export default {
  setActiveModal(state, params) {
    console.log(params)
    state.activeModal = params.activeModal || "";
    state.modalIsActive = params.modalIsActive || false;
    state.commonData = params.commonData || {};
  }
};
