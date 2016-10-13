var assert = chai.assert;
var expect = chai.expect;

describe('Sanitize', function() {
  describe('sanitize(value *string, sanitize_type *string, char_limit *int) => *st', function() {
    var s = "string";
    var test1 = "1!2@3#4$5%6^7&8*9(0)~`_-+={[]|\:;'<,>.?/}qwertyuiopasdfghjklzxcvbnm";
    var test2 = "-1.0234342dde";
    var test3 = "e123456789";
    var test4 = null;
    var test5 = "";
    var test6 = false;

    it('should return a string', function () {
      expect(typeof(sanitize(test1, "alphaNumeric", 5))).to.equal(s);
      expect(typeof(sanitize(test1, "alpha", 5))).to.equal(s);
      expect(typeof(sanitize(test1, "numeric", 5))).to.equal(s);
      expect(typeof(sanitize(test2, "alphaNumeric", 5))).to.equal(s);
      expect(typeof(sanitize(test2, "alpha", 5))).to.equal(s);
      expect(typeof(sanitize(test2, "numeric", 5))).to.equal(s);
      expect(typeof(sanitize(test3, "alphaNumeric", 5))).to.equal(s);
      expect(typeof(sanitize(test3, "alpha", 5))).to.equal(s);
      expect(typeof(sanitize(test3, "numeric", 5))).to.equal(s);
      expect(typeof(sanitize(test4, "alphaNumeric", 5))).to.equal(s);
      expect(typeof(sanitize(test4, "alpha", 5))).to.equal(s);
      expect(typeof(sanitize(test4, "numeric", 5))).to.equal(s);
      expect(typeof(sanitize(test5, "alphaNumeric", 5))).to.equal(s);
      expect(typeof(sanitize(test5, "alpha", 5))).to.equal(s);
      expect(typeof(sanitize(test5, "numeric", 5))).to.equal(s);
      expect(typeof(sanitize(test6, "alphaNumeric", 5))).to.equal(s);
      expect(typeof(sanitize(test6, "alpha", 5))).to.equal(s);
      expect(typeof(sanitize(test6, "numeric", 5))).to.equal(s);
    });

    it('should only return integers when using the "numeric" sanitize_type argument', function() {
      var list_test1 = sanitize(test1, "numeric", 5).split("").map(function(x) { return Number(x) });
      var list_test2 = sanitize(test2, "numeric", 5).split("").map(function(x) { return Number(x) });
      var list_test3 = sanitize(test3, "numeric", 5).split("").map(function(x) { return Number(x) });
      var list_test4 = sanitize(test4, "numeric", 5).split("").map(function(x) { return Number(x) });
      var list_test5 = sanitize(test5, "numeric", 5).split("").map(function(x) { return Number(x) });
      var list_test6 = sanitize(test6, "numeric", 5).split("").map(function(x) { return Number(x) });

      expect( list_test1.map(function(i){ return typeof(i) == "number"}) ).to.have.members([true]);
      expect( list_test1.map(function(i){ return typeof(i) == "number"}) ).to.not.have.members([false]);
      expect( list_test2.map(function(i){ return typeof(i) == "number"}) ).to.have.members([true]);
      expect( list_test2.map(function(i){ return typeof(i) == "number"}) ).to.not.have.members([false]);
      expect( list_test3.map(function(i){ return typeof(i) == "number"}) ).to.have.members([true]);
      expect( list_test3.map(function(i){ return typeof(i) == "number"}) ).to.not.have.members([false]);
      expect( list_test4.map(function(i){ return typeof(i) == "number"}) ).to.have.members([]);
      expect( list_test4.map(function(i){ return typeof(i) == "number"}) ).to.not.have.members([true]);
      expect( list_test5.map(function(i){ return typeof(i) == "number"}) ).to.have.members([]);
      expect( list_test5.map(function(i){ return typeof(i) == "number"}) ).to.not.have.members([true]);
      expect( list_test6.map(function(i){ return typeof(i) == "number"}) ).to.have.members([]);
      expect( list_test6.map(function(i){ return typeof(i) == "number"}) ).to.not.have.members([true]);
    });
  });
});
