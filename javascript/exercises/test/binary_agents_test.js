const assert = require('assert');
const chai = require('chai');
const binaryAgent = require('../binary_agents.js');

describe('Binary Agents', () => {
  describe('binaryAgent()', () => {
    it('should return a string', () => {
      chai.expect(binaryAgent.binaryAgent('01000001 01110010 01100101 01101110 ' +
        '00100111 01110100 00100000 01100010 ' +
        '01101111 01101110 01100110 01101001 ' +
        '01110010 01100101 01110011 00100000 ' +
        '01100110 01110101 01101110 00100001 ' +
        '00111111')).to.be.a('String');
    });

    it('should translate a binary string to a human readable string', () => {
      chai.expect(binaryAgent.binaryAgent('01000001 01110010 01100101 01101110 ' +
        '00100111 01110100 00100000 01100010 ' +
        '01101111 01101110 01100110 01101001 ' +
        '01110010 01100101 01110011 00100000 ' +
        '01100110 01110101 01101110 00100001 ' +
        '00111111')).to.equal("Aren't bonfires fun!?");
      chai.expect(binaryAgent.binaryAgent('01001000 01100101 01101100 01101100 ' +
        '01101111 00100000 01010111 01101111 ' +
        '01110010 01101100 01100100')).to.equal('Hello World');
    });
  });

  describe('bitStringToChar()', () => {
    it('should return a string', () => {
      chai.expect(binaryAgent.bitStringToChar('01001000')).to.be.a('String');
    });
    it('should return exactly 1 character', () => {
      chai.expect(binaryAgent.bitStringToChar('01001000').length).to.equal(1);
    });
    it('should translate an 8-bit binary string into a human readable character', () => {
      chai.expect(binaryAgent.bitStringToChar('01000001')).to.equal('A');
      chai.expect(binaryAgent.bitStringToChar('01100001')).to.equal('a');
      chai.expect(binaryAgent.bitStringToChar('01001100')).to.equal('L');
      chai.expect(binaryAgent.bitStringToChar('01101100')).to.equal('l');
      chai.expect(binaryAgent.bitStringToChar('01011010')).to.equal('Z');
      chai.expect(binaryAgent.bitStringToChar('01111010')).to.equal('z');
    });
  });

  describe('reduceBitstringToDecimal()', () => {
    it('should return a number', () => {
      chai.expect(binaryAgent.reduceBitstringToDecimal('10')).to.be.a('Number');
    });
    it('should reduce each string value into a decimal value', () => {
      chai.expect(binaryAgent.reduceBitstringToDecimal('0')).to.equal(0);
      chai.expect(binaryAgent.reduceBitstringToDecimal('1')).to.equal(1);
      chai.expect(binaryAgent.reduceBitstringToDecimal('100')).to.equal(4);
      chai.expect(binaryAgent.reduceBitstringToDecimal('101')).to.equal(5);
      chai.expect(binaryAgent.reduceBitstringToDecimal('1010')).to.equal(10);
      chai.expect(binaryAgent.reduceBitstringToDecimal('101010')).to.equal(42);
      chai.expect(binaryAgent.reduceBitstringToDecimal('100000000')).to.equal(256);
    });
  });
});
