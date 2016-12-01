const assert = require('assert');
const chai = require('chai');
const factorialize = require('../factorialize_a_number.js');

describe("Factorialize A Number", function() {
  describe('factorialize()', function() {
    it('should return a number', function() {
      chai.expect(factorialize(5)).to.be.a('number');
    });
    it('should return the correct factorial', function() {
      chai.expect(factorialize(5)).to.equal(120);
      chai.expect(factorialize(10)).to.equal(3628800);
      chai.expect(factorialize(20)).to.equal(2432902008176640000);
    });
    it('should return the correct factorial', function() {
      chai.expect(factorialize(5)).to.equal(120);
      chai.expect(factorialize(10)).to.equal(3628800);
      chai.expect(factorialize(20)).to.equal(2432902008176640000);
    });
    it('should return 1 when given a 0', function() {
      chai.expect(factorialize(0)).to.equal(1);
    });
  });
});
