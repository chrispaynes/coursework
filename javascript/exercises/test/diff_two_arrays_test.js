const assert = require('assert');
const diffArray = require('../diff_two_arrays.js');

describe("Diff Two Arrays", function() {
  describe('diffArray()', function() {
    it('should return an array', function() {
      assert.equal(Array.isArray(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])), true);
    });
    it('should return the difference between the first and second array arguments', function() {
      assert.equal(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).toString(), ["pink wool"]);
      assert.equal(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).toString(), ["pink wool", "diorite"]);
      assert.equal(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).toString(), [4]);
      assert.equal(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]).toString(), ["piglet", 4]);
      assert.equal(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]).toString(), ["snuffleupagus", "cookie monster", "elmo"]);
      assert.equal(diffArray([1, "calf", 3, "piglet"], [7, "filly"]).toString(), [1, "calf", 3, "piglet", 7, "filly"]);
    });
    it('should return an empty array if there\'s no difference between the first and second array arguments', function() {
      assert.equal(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]).toString(), []);
    });
  });
});
