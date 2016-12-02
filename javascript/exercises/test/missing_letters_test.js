const assert = require('assert');
const chai = require('chai');
const fearNotLetter = require('../missing_letters.js');

describe("Missing Letters", function() {
  describe('fearNotLetter()', function() {
    it('should return the missing letter in the text string', function() {
      chai.expect(fearNotLetter("abce")).to.equal('d');
      chai.expect(fearNotLetter("abcdefghjklmno")).to.equal('i');
    });
    it('should return undefined if there are no missing letters', function() {
      chai.expect(fearNotLetter("bcd")).to.equal(undefined);
      chai.expect(fearNotLetter("yz")).to.equal(undefined);
    });
  });
});
