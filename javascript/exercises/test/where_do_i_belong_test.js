const assert = require('assert');
const chai = require('chai');
const getIndexToIns = require('../where_do_i_belong.js');

describe('Where Do I Belong', () => {
  describe('getIndexToIns()', () => {
    it('should return the second argument\'s array index after it\'s inserted and sorted into the array', () => {
      chai.expect(getIndexToIns([10, 20, 30, 40, 50], 35)).to.equal(3);
      chai.expect(getIndexToIns([10, 20, 30, 40, 50], 30)).to.equal(2);
      chai.expect(getIndexToIns([40, 60], 50)).to.equal(1);
    });
    it('should return the second argument\'s array index after it\'s inserted into an unsorted array', () => {
      chai.expect(getIndexToIns([3, 10, 5], 3)).to.equal(0);
      chai.expect(getIndexToIns([5, 3, 20, 3], 5)).to.equal(2);
      chai.expect(getIndexToIns([2, 20, 10], 19)).to.equal(2);
      chai.expect(getIndexToIns([2, 5, 10], 15)).to.equal(3);
    });
  });
});
