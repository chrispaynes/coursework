const assert = require('assert');
const chai = require('chai');
const sumAll = require('../sum_all_numbers_in_a_range.js');

describe("Sum All Numbers in a Range", () => {
  describe('sumAll()', () => {
    it('should return a number', () => {
      chai.expect(sumAll([1, 4])).to.be.a('number');
    });
    it('should sum the range of two array numbers that are in ascending order', () => {
      chai.expect(sumAll([1, 4])).to.equal(10);
      chai.expect(sumAll([5, 10])).to.equal(45);
    });
    it('should sum the range of two array numbers that are in descending order', () => {
      chai.expect(sumAll([4, 1])).to.equal(10);
      chai.expect(sumAll([10, 5])).to.equal(45);
    });
  });
});
