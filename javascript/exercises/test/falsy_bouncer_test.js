const assert = require('assert');
const chai = require('chai');
const bouncer = require('../falsy_bouncer.js');

describe("Falsy Bouncer", function() {
  describe('bouncer()', function() {
    it('should return an array without false values', function() {
      chai.expect(bouncer([7, "ate", "", false, 9])).to.deep.equal([7, "ate", 9]);
      chai.expect(bouncer([7, "ate", "", false, 9])).to.deep.equal([7, "ate", 9]);
      chai.expect(bouncer(["a", "b", "c"])).to.deep.equal(["a", "b", "c"]);
      chai.expect(bouncer([7, "ate", "", false, 9])).to.deep.equal([7, "ate", 9]);
      chai.expect(bouncer([1, null, NaN, 2, undefined])).to.deep.equal([1, 2]);
    });
    it('should return an empty array when there are no truthy values', function() {
      chai.expect(bouncer([false, null, 0, NaN, undefined, ""])).to.deep.equal([]);
    });
  });
});
