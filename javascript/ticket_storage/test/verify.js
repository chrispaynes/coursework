var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;
var sinon = sinon;

// Overrides default Window.alert() method.
var alert;

describe('Verification', function() {
  describe('verify(condition *obj, message *string) => *bool', function() {
    it('should return when condition is true', function() {
      expect(verify(1 < 2, "alert message if false")).to.equal(true);
    });

    beforeEach(function() {
      // Alert stores a spy to spy on Window.alert method.
      alert = sinon.spy();
    });

    it('should return false when condition is false', function() {
      expect(verify(1 > 2, 'alert message if false')).to.be.false;
    });

    it('should call the alert function when condition is false', function() {
      verify(1 > 2, 'alert message if false');
      expect(alert.called).to.be.true;
    });

    it("should not call the alert function when condition is true", function () {
      verify(1 < 2, "alert message if false");
      expect(alert.called).to.be.false;
    });
  });
});
