var assert = chai.assert;
var expect = chai.expect;

describe('Create Header', function() {
  describe('createHeader(columns *array obj, header_id *string) => *html obj', function() {

    var table_header2;
    var tbody;
    var last_child;

    beforeEach(function() {
      createHeader(["", "Ticket ID", "Client", "Status", "Cost"], "table_header2");
      table_header2 = document.getElementById("table_header2");
      tbody = document.getElementsByTagName("tbody")[0];
      last_child = table_header2.parentNode.lastChild;
    });

    afterEach(function() {
      table_header2.remove();
    });

    it('should not append more table_header elements if a header already exists', function () {
      expect(last_child).to.not.equal(table_header2);
      expect(last_child.isEqualNode(table_header2)).to.not.be.true;
    });

    it('should create a table_header element', function() {
      expect(document.getElementById("table_header2")).to.exist;
      expect(!!document.getElementById("table_header2")).to.be.true;
    });

    it('should create multiple child nodes within the table_header element', function() {
      assert.isAbove(document.getElementById("table_header2").childNodes.length, 2);
    });

    it('should append the table_header to the table body', function() {
      expect(document.getElementById("table_header2").parentNode).to.equal(tbody);
    });

    it('should insert the table_header as the table body\'s first child node', function() {
      expect(tbody.firstChild.isEqualNode(table_header2)).to.be.true;
      expect(tbody.firstChild).to.equal(table_header2);
    });
  });
});
