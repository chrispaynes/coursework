const assert = require('assert');
const chai = require('chai');
const largestOfFour = require('../return_largest_numbers_in_arrays.js');

describe("Return Largest Numbers in Arrays", function() {
  describe('largestOfFour()', function() {
    it('should return an array', function() {
      chai.expect(typeof(largestOfFour([
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
      ]))).to.be.equal('object');
      chai.expect(Array.isArray(largestOfFour([
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
      ]))).to.equal(true);
    });
    it('should return the largest number from each sub-array', function() {
      chai.assert.deepEqual(largestOfFour([
        [13, 27, 18, 26],
        [4, 5, 1, 3],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
      ]), [27, 5, 39, 1001]);
      chai.assert.deepEqual(largestOfFour([
        [4, 9, 1, 3],
        [13, 35, 18, 26],
        [32, 35, 97, 39],
        [1000000, 1001, 857, 1]
      ]), [9, 35, 97, 1000000]);
    });
  });
});
