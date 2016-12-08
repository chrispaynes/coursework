const assert = require('assert');
const chai = require('chai');
const reverseString = require('../reverse_a_string.js');

describe("Reverse The Provided String", () => describe('reverseString()',
  () => {
    it('should return a string',
      () => chai.expect(reverseString("hello")).to.be.a('string'));
    it('should reverse the and maintain upper and lowercase',
      () => {
        chai.expect(reverseString("hello")).to.equal("olleh");
        chai.expect(reverseString("Howdy")).to.equal("ydwoH");
        chai.expect(reverseString("Greetings from Earth")).to.equal("htraE morf sgniteerG");
      });
  }));
