const assert = require('assert');
const chai = require('chai');
const truthCheck = require('../everything_be_true.js');

describe("Everything Be True", function() {
  describe('truthCheck()', function() {
    it('should return true if the second argument represents a property with a value in each collection element', function() {
      chai.expect(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex")).to.equal(true);
      chai.expect(truthCheck([{ "single": "yes" }], "single")).to.equal(true);
    });
    it('should return true if the second argument is a property of a collection element and the property has a true value', function() {
      chai.expect(truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true, "alias": "Repete" }, { "name": "FastFoward", "onBoat": true }], "onBoat")).to.equal(true);
    });
    it('should return false if the second argument is not a property in each collection element', function() {
      chai.expect(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex")).to.equal(false);
    });
    it('should return false if the second argument is a property of a collection element and the property has a zero value', function() {
      chai.expect(truthCheck([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age")).to.equal(false);
    });
    it('should return false if the second argument is a property of a collection element and the property has a null value', function() {
      chai.expect(truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true }, { "name": "FastFoward", "onBoat": null }], "onBoat")).to.equal(false);
    });
    it('should return false if the second argument is a property of a collection element and the property has a NaN value', function() {
      chai.expect(truthCheck([{ "single": "double" }, { "single": NaN }], "single")).to.equal(false);
    });
    it('should return false if the second argument is a property of a collection element and the property has a undefined value', function() {
      chai.expect(truthCheck([{ "single": "double" }, { "single": undefined }], "single")).to.equal(false);
    });
    it('should return false if the second argument is a property of a collection element and the property has a "" value', function() {
      chai.expect(truthCheck([{ "single": "" }, { "single": "double" }], "single")).to.equal(false);
    });
  });
});
