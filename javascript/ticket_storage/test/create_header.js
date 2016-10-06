var assert = chai.assert;
var expect = chai.expect;

describe('Create Header', function() {
  describe('createHeader()', function() {
    //
    it('should not append more table_header elements if a header already exists', function () {
      var table_header = document.getElementById("table_header");
      var last_child = table_header.parentNode.lastChild;
      expect(last_child).to.not.equal(table_header);
    });

    beforeEach(function() {
      createHeader()
    });

    it('should create a table_header element', function() {
      expect(document.getElementById("table_header")).to.exist;
      expect(!!document.getElementById("table_header")).to.equal(true);
    });

    it('should create multiple child nodes within the table_header element', function() {
      assert.isAbove(document.getElementById("table_header").childNodes.length, 2)
    });
  });
});
