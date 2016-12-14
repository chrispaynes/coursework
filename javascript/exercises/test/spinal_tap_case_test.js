const assert = require('assert');
const chai = require('chai');
const spinalCase = require('../spinal_tap_case.js');

describe('Spinal Tap Case', () => {
  describe('spinalCase()', () => {
    it('should transform the string into all-lowercase-words-joined-by-dashes.', () => {
      chai.expect(spinalCase('This Is Spinal Tap')).to.equal('this-is-spinal-tap');
      chai.expect(spinalCase('thisIsSpinalTap')).to.equal('this-is-spinal-tap');
      chai.expect(spinalCase('The_Andy_Griffith_Show')).to.equal('the-andy-griffith-show');
      chai.expect(spinalCase('Teletubbies say Eh-oh')).to.equal('teletubbies-say-eh-oh');
      chai.expect(spinalCase('AllThe-small Things')).to.equal('all-the-small-things');
    });
  });
});
