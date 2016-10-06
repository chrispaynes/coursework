var assert = chai.assert;
var expect = chai.expect;

describe('Create Node', function() {
  describe('createNode()', function() {
    //
    it('should add text content to a node if content is provided', function () {
      var content = "hello paragraph";
      var node1 = createNode({"p": content}, "", "");
      var node2 = createNode({"td": content}, "", "");
      var node3 = createNode({"li": content}, "", "");
      expect(node1.textContent).to.equal(content);
      expect(node2.textContent).to.equal(content);
      expect(node3.textContent).to.equal(content);
    });

    it('should return a newly created node matching the node argument', function() {
      var new_node = createNode({"p": "hello world"}, "", "")
      expect(new_node instanceof Element).to.be.true;
      expect(new_node.nodeName).to.equal("P");
    });

    it('should set an attribute name and value when provided with name/value arguments', function() {
      var node1 = createNode({"p": "hello world"}, [{"id": "new_id"}])
      var node2 = createNode({"th": "hello world"}, [{"class": "new_class"}])
      var node3 = createNode({"button": ""}, [{"class": "new_button"}])
      expect(node1.id).to.equal("new_id");
      expect(node2.className).to.equal("new_class");
      expect(node3.className).to.equal("new_button");
    });
  });
});
