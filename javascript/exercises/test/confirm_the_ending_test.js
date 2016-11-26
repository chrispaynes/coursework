const assert = require('assert');
const confirmEnding = require('../confirm_the_ending.js');

describe("Confirm The Ending", function() {
  describe('confirmEnding()', function() {
    it('should return true if the second argument matches the end of the first argument', function() {
      assert.equal(confirmEnding("Bastian", "n"), true);
      assert.equal(confirmEnding("He has to give me a new name", "name"), true);
      assert.equal(confirmEnding("He has to give me a new name", "me"), true);
    });
    it('should return false if the second argument does not match the end of the first argument', function() {
      assert.equal(confirmEnding("Connor", "n"), false);
      assert.equal(confirmEnding("He has to give me a new name", "na"), false);
      assert.equal(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"), false);
      assert.equal(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"), false);
    });
  });
});
