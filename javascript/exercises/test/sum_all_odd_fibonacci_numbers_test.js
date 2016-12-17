const assert = require('assert');
const chai = require('chai');
const sumFibs = require('../sum_all_odd_fibonacci_numbers.js');

describe("Sum All Odd Fibonacci Numbers", () => {
  describe('sumFibs()', () => {
    it('should return a number', () => {
      chai.expect(sumFibs(1)).to.be.a('number');
    });
    it('should return 0 when given 0', () => {
      chai.expect(sumFibs(0)).to.equal(0);
    });
    it('should sum all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number', () => {
      chai.expect(sumFibs(1000)).to.equal(1785);
      chai.expect(sumFibs(4000000)).to.equal(4613732);
      chai.expect(sumFibs(4)).to.equal(5);
      chai.expect(sumFibs(75024)).to.equal(60696);
      chai.expect(sumFibs(75025)).to.equal(135721);
    });
  });
});
