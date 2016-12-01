const assert = require('assert');
const chai = require('chai');
const findLongestWord = require('../find_the_longest_word_in_a_string.js');

describe("Find the Longest Word in a String", function() {
  describe('findLongestWord()', function() {
    it('should return a number', function() {
      chai.expect(findLongestWord("The quick brown fox jumped over the lazy dog")).to.be.a('number');
    });
    it('should return the longest word\'s string length', function() {
      chai.expect(findLongestWord("The quick brown fox jumped over the lazy dog")).to.equal(6);
      chai.expect(findLongestWord("May the force be with you")).to.equal(5);
      chai.expect(findLongestWord("Google do a barrel roll")).to.equal(6);
      chai.expect(findLongestWord("What is the average airspeed velocity of an unladen swallow")).to.equal(8);
      chai.expect(findLongestWord("What if we try a super-long word such as otorhinolaryngology")).to.equal(19);
    });
  });
});
