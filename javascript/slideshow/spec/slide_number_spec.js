describe("Writes Current Slide Number", function() {

  beforeEach(function() {
    document.h2[0].innerHTML = document.current_image.children[0].id + " / " + (source_images.length - 1);
  });

    // expect(current_image.children[0]).tobe(4);
  it("Should find the length of the source_images array", function() {
    expect(source_images.length).toBeDefined();
  });

  it("Should find the current_image's id", function() {
    expect(document.current_image.children[0].id).toBeDefined();
  });

  it("Should return a text fraction", function() {
    expect(document.h2[0].innerHTML).toEqual("1 / 6");
  });
});