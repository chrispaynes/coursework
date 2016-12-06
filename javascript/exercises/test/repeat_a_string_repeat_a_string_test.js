const assert = require('assert');
const chai = require('chai');
const repeatStringNumTimes = require('../repeat_a_string_repeat_a_string.js');

describe("Repeat a String Repeat a String", function() {
  describe('repeatStringNumTimes()', function() {
    it('should return the first argument a number of times equal to the second argument', function() {
      chai.expect(repeatStringNumTimes("*", 3)).to.equal('***');
      chai.expect(repeatStringNumTimes("abc", 3)).to.equal('abcabcabc');
      chai.expect(repeatStringNumTimes("abc", 4)).to.equal('abcabcabcabc');
      chai.expect(repeatStringNumTimes("abc", 1)).to.equal('abc');
      chai.expect(repeatStringNumTimes("*", 8)).to.equal('********');
    });
    it('should return an empty string if the number of times is less than 1', function() {
      chai.expect(repeatStringNumTimes("abc", -2)).to.equal('');
      chai.expect(repeatStringNumTimes("abc", 0)).to.equal('');
      chai.expect(repeatStringNumTimes("abc", 0.5)).to.equal('');
      chai.expect(repeatStringNumTimes("abc", -0.5)).to.equal('');
    });
  });
});
