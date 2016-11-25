const assert = require('assert');
const booWho = require('../boo_who.js');

describe('Boo Who', function() {
  describe('booWho()', function() {
    it('should return true when passed a boolean', function() {
      assert.equal(booWho(true), true);
      assert.equal(booWho(false), true);
    });
    it('should return false when passed an array', function() {
      assert.equal(booWho([1, 2, 3]), false);
      assert.equal(booWho([1, 2, 3].slice), false);
    });
    it('should return false when passed a slice of elements', function() {
      assert.equal(booWho([1, 2, 3].slice), false);
    });
    it('should return false when passed an object', function() {
      assert.equal(booWho({ "a": 1 }), false);
    });
    it('should return false when passed a 1 or 0', function() {
      assert.equal(booWho(1), false);
      assert.equal(booWho(0), false);
    });
    it('should return false when passed a NaN', function() {
      assert.equal(booWho(NaN), false);
    });
    it('should return false when passed a string', function() {
      assert.equal(booWho("a"), false);
      assert.equal(booWho("true"), false);
      assert.equal(booWho("false"), false);
    });
    it('should return false when passed a null value', function() {
      assert.equal(booWho(null), false);
    });
    it('should return false when passed an empty string', function() {
      assert.equal(booWho(""), false);
    });
  });

});
