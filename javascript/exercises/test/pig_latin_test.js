const assert = require('assert');
const chai = require('chai');
const translatePigLatin = require('../pig_latin.js');

describe("Pig Latin", function() {
  describe('translatePigLatin()', function() {
    it('should return the string argument translated to pig latin', function() {
      chai.expect(translatePigLatin("california")).to.equal("aliforniacay");
      chai.expect(translatePigLatin("paragraphs")).to.equal("aragraphspay");
      chai.expect(translatePigLatin("glove")).to.equal("oveglay");
      chai.expect(translatePigLatin("algorithm")).to.equal("algorithmway");
      chai.expect(translatePigLatin("eight")).to.equal("eightway");
    });
  });
});
