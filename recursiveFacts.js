/*jshint esversion: 6*/
const recurseFactorial = (num) => {
  if (num === 1) {
    return num;
  }

  return num * recurseFactorial(--num);
};

module.exports = recurseFactorial;