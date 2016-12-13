const assert = require('assert');
const chai = require('chai');
const uniteUnique = require('../sorted_union.js');

describe("Sorted Union", () => {
  describe('uniteUnique()', () => {
    it('should return a new array of unique values in the order of the original provided arrays', () => {
      chai.expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).to.deep.equal([1, 3, 2, 5, 4]);
      chai.expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).to.deep.equal([1, 3, 2, [5],
        [4]
      ]);
      chai.expect(uniteUnique([1, 2, 3], [5, 2, 1])).to.deep.equal([1, 2, 3, 5]);
      chai.expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).to.deep.equal([1, 2, 3, 5, 4, 6, 7, 8]);
    });
  });
});
