const assert = require('assert');
const chai = require('chai');
const dropElements = require('../drop_it.js');

describe("Drop It", function() {
  describe('dropElements()', function() {
    it('should return the array elements that match the second argument\'s conditional statement', function() {
      chai.expect(dropElements([1, 2, 3, 4], function(n) {
        return n >= 3;
      })).to.deep.equal([3, 4]);
      chai.expect(dropElements([0, 1, 0, 1], function(n) {
        return n === 1;
      })).to.deep.equal([1, 0, 1]);
      chai.expect(dropElements([1, 2, 3], function(n) {
        return n > 0;
      })).to.deep.equal([1, 2, 3]);
      chai.expect(dropElements([1, 2, 3, 7, 4], function(n) {
        return n > 3;
      })).to.deep.equal([7, 4]);
      chai.expect(dropElements([1, 2, 3, 9, 2], function(n) {
        return n > 2;
      })).to.deep.equal([3, 9, 2]);
    });
    it('should return an empty array if no array values match the second argument\'s conditional statement', function() {
      chai.expect(dropElements([1, 2, 3, 4], function(n) {
        return n > 5;
      })).to.deep.equal([]);
    });
  });
});
