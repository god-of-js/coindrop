const errorNot = (msg, vueApp) => {
  let error = {
    position: "topRight"
  };
  vueApp.$toast.error(msg, "Error", error);
};
const successNot = (msg, vueApp, position = "topRight") => {
  let config = {
    position
  };
  vueApp.$toast.success(msg, "Success", config);
};
export { errorNot, successNot };
