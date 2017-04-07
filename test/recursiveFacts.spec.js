/*jshint esversion: 6*/
const chai = require("chai");
const expect = chai.expect;

const recFacts = require("../recursiveFacts.js");

describe("Recursive Factorial", () => {
  it("should return factorial of inputted number", () => {
    expect(recFacts(5)).to.equal(120);
    expect(recFacts(10)).to.equal(3628800);
    expect(recFacts(15)).to.equal(1307674368000);
    expect(recFacts(20)).to.equal(2432902008176640000);
  });

  it("should not take non-numbers or negative numbers", () => {
    expect(recFacts.bind(null, [5, 4, 3])).to.throw(Error);
    expect(recFacts.bind(null, -5)).to.throw(Error);
    expect(recFacts.bind(null, Infinity)).to.throw(Error);
  });
});