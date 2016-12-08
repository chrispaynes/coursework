const assert = require('assert');
const chai = require('chai');
const convertToRoman = require('../roman_numeral_converter.js');

describe('Roman Numeral Converter', () => {
  describe('convertToRoman()', () => {
    it('should convert an integer into a roman numeral string', () => {
      chai.expect(convertToRoman(2)).to.be.equal('II');
      chai.expect(convertToRoman(3)).to.be.equal('III');
      chai.expect(convertToRoman(4)).to.be.equal('IV');
      chai.expect(convertToRoman(5)).to.be.equal('V');
      chai.expect(convertToRoman(9)).to.be.equal('IX');
      chai.expect(convertToRoman(12)).to.be.equal('XII');
      chai.expect(convertToRoman(16)).to.be.equal('XVI');
      chai.expect(convertToRoman(29)).to.be.equal('XXIX');
      chai.expect(convertToRoman(44)).to.be.equal('XLIV');
      chai.expect(convertToRoman(45)).to.be.equal('XLV');
      chai.expect(convertToRoman(68)).to.be.equal('LXVIII');
      chai.expect(convertToRoman(83)).to.be.equal('LXXXIII');
      chai.expect(convertToRoman(97)).to.be.equal('XCVII');
      chai.expect(convertToRoman(99)).to.be.equal('XCIX');
      chai.expect(convertToRoman(500)).to.be.equal('D');
      chai.expect(convertToRoman(501)).to.be.equal('DI');
      chai.expect(convertToRoman(649)).to.be.equal('DCXLIX');
      chai.expect(convertToRoman(798)).to.be.equal('DCCXCVIII');
      chai.expect(convertToRoman(891)).to.be.equal('DCCCXCI');
      chai.expect(convertToRoman(1000)).to.be.equal('M');
      chai.expect(convertToRoman(1004)).to.be.equal('MIV');
      chai.expect(convertToRoman(1006)).to.be.equal('MVI');
      chai.expect(convertToRoman(1023)).to.be.equal('MXXIII');
      chai.expect(convertToRoman(2014)).to.be.equal('MMXIV');
      chai.expect(convertToRoman(3999)).to.be.equal('MMMCMXCIX');
    });
  });
});
