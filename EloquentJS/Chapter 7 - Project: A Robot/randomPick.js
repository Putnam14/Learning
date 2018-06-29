module.exports = function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
};
