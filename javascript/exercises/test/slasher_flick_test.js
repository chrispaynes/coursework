const assert = require('assert');
const chai = require('chai');
const slasher = require('../slasher_flick.js');

describe("Slasher Flick", () => {
  describe('slasher()', () => {
    it('should return the remaining array elements after removing n elements from the head.', () => {
      chai.expect(slasher([1, 2, 3], 2)).to.deep.equal([3]);
      chai.expect(slasher([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
      chai.expect(slasher([1, 2, 3], 9)).to.deep.equal([]);
      chai.expect(slasher([1, 2, 3], 4)).to.deep.equal([]);
      chai.expect(slasher(["burgers", "fries", "shake"], 1)).to.deep.equal(["fries", "shake"]);
      chai.expect(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)).to.deep.equal(["cheese", 4]);
    });
  });
});
