const assert = require('assert');
const palindrome = require('../check_for_palindromes.js');

describe("Check For Palindromes", function() {
  describe('palidrome()', function() {
    it('should return true when passed a single-word palindrome', function() {
      assert.equal(palindrome("eye"), true);
    });
    it('should return true when passed a multi-word palindrome', function() {
      assert.equal(palindrome("race car"), true);
      assert.equal(palindrome("never odd or even"), true);
      assert.equal(palindrome("0_0 (: /-\ :) 0-0"), true);
    });
    it('should return true when passed a multi-word palindrome that includes a period', function() {
      assert.equal(palindrome("My age is 0, 0 si ega ym."), true);
      assert.equal(palindrome("race car."), true);
      assert.equal(palindrome("A man, a plan, a canal. Panama"), true);
    });
    it('should return false when passed a single-word non-palindrome', function() {
      assert.equal(palindrome("nope"), false);
      assert.equal(palindrome("almostomla"), false);
    });
    it('should return false when passed a multi-word non-palindrome', function() {
      assert.equal(palindrome("not a palindrome"), false);
      assert.equal(palindrome("1 eye for of 1 eye."), false);
    });
    it('should return a boolean', function() {
      assert.equal(typeof(palindrome("race car")), "boolean");
      assert.equal(typeof(palindrome("race car1")), "boolean");
    });
  });

});
