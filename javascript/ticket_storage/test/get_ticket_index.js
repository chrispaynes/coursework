var expect = chai.expect;
var should = chai.should;

describe('Get Ticket Index', function() {
  describe('getTicketIndex(queryId *int) => *int', function() {
    it('should return the correct index value', function() {
      expect(getTicketIndex(100000)).to.equal(0);
      expect(getTicketIndex(300000)).to.equal(2);
      expect(getTicketIndex(500000)).to.equal(4);
      expect(getTicketIndex(700000)).to.equal(6);
    });

    it('all non-positive integers values should return -1 or undefined', function() {
      expect(getTicketIndex("a")).to.equal(-1);
      expect(getTicketIndex(2.3)).to.equal(-1);
      expect(getTicketIndex(true)).to.equal(-1);
      expect(getTicketIndex(false)).to.equal(-1);
      expect(getTicketIndex(-1)).to.equal(-1);
      expect(getTicketIndex(0)).to.equal(-1);
      expect(getTicketIndex(9999999)).to.equal(-1);
      expect(getTicketIndex("")).to.equal(-1);
    });
  });
});
