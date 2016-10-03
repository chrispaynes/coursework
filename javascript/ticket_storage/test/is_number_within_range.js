var expect = chai.expect;

describe('Number Validation', function() {
  describe('isNumberWithinRange(num, min, max)', function() {
    it('should return a bool', function() {
      var is_true  = isNumberWithinRange(100, 0, 200);
      var is_false = isNumberWithinRange(100, 0, 50);
      expect(is_true).to.equal(true);
      expect(is_false).to.equal(false);
    });

    it('should return false if min or max are not integers', function() {
      expect(isNumberWithinRange(100, "a", "z")).to.equal(false);
      expect(isNumberWithinRange(100, 1, "z")).to.equal(false);
      expect(isNumberWithinRange(100, "a", 9)).to.equal(false);
      expect(isNumberWithinRange(100, "a", 9)).to.equal(false);
    });

    it('isNumberWithinRange(5, *, *) should return true', function() {
      expect(isNumberWithinRange(5, 0, 10)).to.equal(true);
      expect(isNumberWithinRange(5, 6, 2)).to.equal(true);
      expect(isNumberWithinRange(5, 4, 6)).to.equal(true);
      expect(isNumberWithinRange(5, -1, 6)).to.equal(true);
      expect(isNumberWithinRange(5, 4.3, 6.8)).to.equal(true);
    });

    it('isNumberWithinRange(10, *, *) should return false', function() {
      expect(isNumberWithinRange(10, 1, 2)).to.equal(false);
      expect(isNumberWithinRange(10, -1, 9)).to.equal(false);
      expect(isNumberWithinRange(10, "a", "b")).to.equal(false);
      expect(isNumberWithinRange(10, 9, 9)).to.equal(false);
      expect(isNumberWithinRange(10, -1, -10)).to.equal(false);
      expect(isNumberWithinRange(10, 30, 20)).to.equal(false);
    });

  });
});
