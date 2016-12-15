const assert = require('assert');
const chai = require('chai');
const steamrollArray = require('../steamroller.js');

describe("Steamroller", () => {
  describe('steamrollArray()', () => {
    it('should return a number', () => {
      chai.expect(steamrollArray([[["a"]], [["b"]]])).to.deep.equal(["a", "b"]);
      chai.expect(steamrollArray([1, [2], [3, [[4]]]])).to.deep.equal([1, 2, 3, 4]);
      chai.expect(steamrollArray([1, [], [3, [[4]]]])).to.deep.equal([1, 3, 4]);
      chai.expect(steamrollArray([1, {}, [3, [4]]])).to.deep.equal([1, {}, 3, 4]);
    });
  });
});
