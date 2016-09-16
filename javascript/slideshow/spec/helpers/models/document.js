beforeEach(function() {
  // mimics html doc
  document = {
    "h1": {
      "innerHTML": "sampleText"
    },
    "h2": [
            {
              "src": 99999,
              "innerHTML": ""
            },
            {
              "src": 2587687,
              "innerHTML": ""
            }
    ],
    "current_image": {
                        "children": [{"fake_id": 0, "id": 1}]
                     }
  };

});