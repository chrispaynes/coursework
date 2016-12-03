const assert = require('assert');
const chai = require('chai');
const mutation = require('../mutations.js');

describe("Mutations", function() {
  describe('mutation()', function() {
    it('should return true if the first string argument contains all letters from the second string', function() {
      chai.expect(mutation(["hello", "Hello"])).to.equal(true);
      chai.expect(mutation(["Mary", "Army"])).to.equal(true);
      chai.expect(mutation(["Mary", "Aarmy"])).to.equal(true);
      chai.expect(mutation(["Alien", "line"])).to.equal(true);
      chai.expect(mutation(["floor", "for"])).to.equal(true);
      chai.expect(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).to.equal(true);

    });
    it('should return false if the first string argument does not contain all letters from the second string', function() {
      chai.expect(mutation(["hello", "hey"])).to.equal(false);
      chai.expect(mutation(["hello", "neo"])).to.equal(false);
      chai.expect(mutation(["voodoo", "no"])).to.equal(false);
    });
  });
});
