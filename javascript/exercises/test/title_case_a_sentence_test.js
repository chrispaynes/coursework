const assert = require('assert');
const chai = require('chai');
const titleCase = require('../title_case_a_sentence.js');

describe('Title Case a Sentence', () => {
  describe('titleCase()', () => {
    it('should return a string', () => {
      chai.expect(titleCase('I\'m a little tea pot')).to.be.a('string');
    });
    it('should not capitalize letters that come after the first letter of a word', () => {
      chai.expect(titleCase('aLpHa BrAvO cHaRlIe')).to.not.equal('ALpHa BrAvO CHaRlIe');
      chai.expect(titleCase('ALPHRA BRAVO CHARLIE DELTA')).to.not.equal('ALPHRA BRAVO CHARLIE DELTA');
    });

    it('should capitalize the first letter of each word', () => {
      chai.expect(titleCase("I'm a little tea pot")).to.equal("I'm A Little Tea Pot");
      chai.expect(titleCase('sHoRt AnD sToUt')).to.equal('Short And Stout');
      chai.expect(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')).to.equal('Here Is My Handle Here Is My Spout');
    });
  });
});
