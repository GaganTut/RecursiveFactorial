/*jshint esversion: 6*/
const recurseFactorial = (num) => {
  checkNum(num);
  if (num === 1) {
    return num;
  }
  return num * recurseFactorial(--num);
};

const checkNum = (num) => {
  if (typeof num !== "number" || num < 0 || num === Infinity || num.isNaN) {
    throw new Error("Positive Integers Only");
  }
};

module.exports = recurseFactorial;