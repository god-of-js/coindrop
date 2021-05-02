const imgCheck = file => {
  if (file.type !== "image/jpeg" && file.type !== "image/png") {
    return false;
  } else {
    return true;
  }
};
export { imgCheck };
