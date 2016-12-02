const assert = require('assert');
const chai = require('chai');
const findElement = require('../finders_keepers.js');

describe("Finders Keepers", function() {
  describe('findElement()', function() {
    it('should return the first array element that passes the function argument\'s truthy test', function() {
      chai.expect(findElement([1, 3, 5, 8, 9, 10], function(num) {
        return num % 2 === 0;
      })).to.equal(8);
      chai.expect(findElement([1, 3, 5, 8, 9, 10, 11], function(num) {
        return num % 3 === 0;
      })).to.equal(3);
      chai.expect(findElement([1, 3, 5, 8, 9, 10, 12], function(num) {
        return num % 4 === 0;
      })).to.equal(8);
      chai.expect(findElement(["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"], function(word) {
        return word.length === 7;
      })).to.deep.equal("Charlie");
    });
    it('should return undefined if no elements pass the function argument\'s truthy test', function() {
      chai.expect(findElement([1, 3, 5, 9], function(num) {
        return num % 2 === 0;
      })).to.equal(undefined);
    });
  });
});
