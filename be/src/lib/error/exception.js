const create = (name, message) => {
  console.log('this: ', this);
  this.message = message;
  this.name = name;
};

module.exports = {
  create,
};
