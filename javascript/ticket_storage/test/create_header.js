var assert = chai.assert;
var expect = chai.expect;

describe('Create Header', function() {
  describe('createHeader()', function() {
    //
    it('should not append more table_header elements if a header already exists', function () {
      var table_header = document.getElementById("table_header");
      var last_child = table_header.parentNode.lastChild;
      expect(last_child).to.not.equal(table_header);
      expect(last_child.isEqualNode(table_header)).to.not.be.true;
    });

    beforeEach(function() {
      createHeader()
    });

    it('should create a table_header element', function() {
      expect(document.getElementById("table_header")).to.exist;
      expect(!!document.getElementById("table_header")).to.be.true;
    });

    it('should create multiple child nodes within the table_header element', function() {
      assert.isAbove(document.getElementById("table_header").childNodes.length, 2);
    });

    it('should append the table_header to the table body', function() {
      var tbody = document.getElementsByTagName("tbody")[0];
      expect(document.getElementById("table_header").parentNode).to.equal(tbody);
    });

    it('should insert the table_header as the table body\'s first child node', function() {
      var tbody = document.getElementsByTagName("tbody")[0];
      var table_header = document.getElementById("table_header");
      expect(tbody.firstChild).to.equal(table_header);
    });
  });
});
