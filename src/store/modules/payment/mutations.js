export default {
  setWithdrawalRequests(state, params) {
    state.withdrawalRequests = params;
  },
  setClaimedPayments(state, params) {
    state.claimedPayments = params;
  },
  setClaimedPayment(state, params) {
    state.claimedPayment = params;
  },
  setWithdrawalRequest(state, params) {
    state.withdrawalRequest = params;
  }
};
