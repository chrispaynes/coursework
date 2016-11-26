const assert = require('assert');
const chunkArrayInGroups = require('../chunky_monkey.js');

describe("Chunky Monkey", function() {
  describe('chunkArrayInGroups()', function() {
    it('should split an array into equal size chunks based on the integer argument', function() {
      assert.equal(chunkArrayInGroups(["a", "b", "c", "d"], 2).toString(), [
        ["a", "b"],
        ["c", "d"]
      ]);
      assert.equal(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3).toString(), [
        [0, 1, 2],
        [3, 4, 5]
      ]);
      assert.equal(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2).toString(), [
        [0, 1],
        [2, 3],
        [4, 5]
      ]);
    });
    it('should split an array into smaller chunks if the array length is not evenly divisible by the integer argument', function() {
      assert.equal(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4).toString(), [
        [0, 1, 2, 3],
        [4, 5]
      ]);
      assert.equal(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3).toString(), [
        [0, 1, 2],
        [3, 4, 5],
        [6]
      ]);
      assert.equal(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4).toString(), [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8]
      ]);
    });
  });
});
