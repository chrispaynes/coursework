const assert = require('assert');
const chai = require('chai');
const pairElement = require('../dna_pairing.js');

describe("DNA Pairing", function() {
  describe('pairElement()', function() {
    it('should split each character into a correct DNA base pair', function() {
      chai.expect(pairElement("ATCGA")).to.deep.equal([
        ["A", "T"],
        ["T", "A"],
        ["C", "G"],
        ["G", "C"],
        ["A", "T"]
      ]);
      chai.expect(pairElement("TTGAG")).to.deep.equal([
        ["T", "A"],
        ["T", "A"],
        ["G", "C"],
        ["A", "T"],
        ["G", "C"]
      ]);
      chai.expect(pairElement("CTCTA")).to.deep.equal([
        ["C", "G"],
        ["T", "A"],
        ["C", "G"],
        ["T", "A"],
        ["A", "T"]
      ]);
    });
    it('should return an array the same length as the argument string', function() {
      const argv = "ATCGA";
      const result = pairElement("ATCGA");
      chai.expect(Array.isArray(result)).to.be.true;
      chai.expect(result.length).to.equal(argv.length);
    });
  });
});
