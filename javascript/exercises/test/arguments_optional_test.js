const assert = require('assert');
const addTogether = require('../arguments_optional.js');

describe('Arguments Optional', function() {
  describe('addTogether()', function() {
    it('should sum the values of addTogether\'s arguments', function() {
      assert.equal(addTogether(2, 3), 5);
    });
    it('should sum the values of addTogether\'s argument with a closure', function() {
      assert.equal(addTogether(2)(3), 5);
    });
    it('should return undefined for non-numerical arguments', function() {
      assert.equal(addTogether('a', 3), undefined);
      assert.equal(addTogether(3, 'a'), undefined);
      assert.equal(addTogether("http://bit.ly/IqT6zt"), undefined);
    });
    it('should return undefined when adding numbers written as strings', function() {
      assert.equal(addTogether(2, "3"), undefined);
    });
    it('should return undefined when adding a number inside an array', function() {
      assert.equal(addTogether(2, [3]), undefined);
    });
    it('should return undefined for empty string arguments', function() {
      assert.equal(addTogether("", ""), undefined);
    });
    it('should return undefined for null arguments', function() {
      assert.equal(addTogether(null, null), undefined);
    });
  });
});
