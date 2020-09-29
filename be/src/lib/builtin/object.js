function emptyObject(object) {
  try {
    Object.keys(object);
    return false;
  } catch (e) {
    return true;
  }
}

module.exports = {
  emptyObject,
};
