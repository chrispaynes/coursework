const assert = require('assert');
const chai = require('chai');
const myReplace = require('../search_and_replace.js');

describe("Search and Replace ", () => {
  describe('myReplace()', () => {
    it('should return the first sentence with the second word replaced by the third word', () => {
      chai.expect(myReplace("Let us go to the store", "store", "mall")).to.equal("Let us go to the mall");
      chai.expect(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")).to.equal("He is Sitting on the couch");
      chai.expect(myReplace("This has a spellngi error", "spellngi", "spelling")).to.equal("This has a spelling error");
      chai.expect(myReplace("His name is Tom", "Tom", "john")).to.equal("His name is John");
      chai.expect(myReplace("Let us get back to more Coding", "Coding", "algorithms")).to.equal("Let us get back to more Algorithms");
    });
  });
});
