const assert = require('assert');
const rot13 = require('../caesars_cipher.js');

describe("Caesar's Cipher", function() {
  describe('rot13()', function() {
    it('should decode and encoded string to human readable text', function() {
      assert.equal(rot13("SERR PBQR PNZC"), "FREE CODE CAMP");
      assert.equal(rot13("SERR CVMMN!"), "FREE PIZZA!");
      assert.equal(rot13("SERR YBIR?"), "FREE LOVE?");
      assert.equal(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."), "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.");
    });
  });

});
