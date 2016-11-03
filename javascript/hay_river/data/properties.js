  var map_1821 = {};
  var map_1818 = {};
  var map_1815 = {};
  var map_N4923 = {};
  var rentals = [];

  function Property(address, coordinates, image, type, description, features, floorplan, panOffset, map) {
    this.addr = address;
    this.coordinates = { "latitude": coordinates.latitude, "longitude": coordinates.longitude };
    this.image = image;
    this.category = type;
    this.description = description;
    this.features = features;
    this.floorplan = floorplan;
    this.mapPanBy = { "x": panOffset.x, "y": panOffset.y };
    this.map = map;
  }

  var property1821 = new Property("1821 7th Street <br> Menomonie, WI 54751", { "latitude": 44.865782, "longitude": -91.922486 },
    "1821.jpg",
    "4 Bedroom Apartment",
    "DESCRIPTION",
    "PROP #1: 4 Bedrooms, Eat-in kitchen, 2 Bathrooms, Plenty of sun, Deck, Storage, Washing Machine/Dryer, Gas Stove, Personal Butler, Oversized Garage, Option for fully-furnished",
    "floor.jpg", { "x": 0, "x": 0 },
    map_1821);

  var property1818 = new Property("1818 6th Street <br> Menomonie, WI 54751", { "latitude": 44.865979, "longitude": -91.9252027 },
    "1818.jpg",
    "4 Bedroom Apartment",
    "DESCRIPTION",
    "PROP #2: 4 Bedrooms, Eat-in kitchen, 2 Bathrooms, Plenty of sun, Deck, Storage, Washing Machine/Dryer, Gas Stove, Personal Butler, Oversized Garage, Option for fully-furnished",
    "floor.jpg", { "x": 0, "x": 0 },
    map_1818);

  var property1815 = new Property("1815 7th Street <br> Menomonie, WI 54751", { "latitude": 44.866102, "longitude": -91.9246957 },
    "1815.jpg",
    "4 Bedroom Apartment",
    "DESCRIPTION",
    "PROP #3: 4 Bedrooms, Eat-in kitchen, 2 Bathrooms, Plenty of sun, Deck, Storage, Washing Machine/Dryer, Gas Stove, Personal Butler, Oversized Garage, Option for fully-furnished",
    "floor.jpg", { "x": 0, "x": 0 },
    map_1815);

  var propertyN4923 = new Property("N4923 - 572nd Street <br> Menomonie, WI 54751", { "latitude": 44.8589455, "longitude": -91.8753319 },
    "N4923.jpg",
    "3 Bedroom Townhouse",
    "Country Views: Classic, naturally well-lit, single level 3 bedroom, 2 bath townhouse with 2 car garage in quiet neighborhood. It’s conveniently located 5 miles south of I-94 and 5 miles SE of downtown Menomonie.  Open concept floor plan with patio that leads out to spacious backyard.",
    "&bull; Master suite with double closets and master bath with walk-in shower, &bull; 2 Sizeable Bedrooms, &bull; Full Bath located between bedrooms, &bull; Open Concept Floor Plan, &bull; Gas fireplace, &bull; Washer/Dryer, &bull; Dishwasher, &bull; Central Air Conditioning, &bull; Hardwood floors, &bull; Walkout Patio to backyard and garden shed for extra storage, &bull; Insulated 2 car garage with electric door opener, &bull; Snow Removal, &bull; Lawn Care and Garbage included, &bull; Pet-Friendly ",
    "floor.jpg", { "x": 125, "y": -100 },
    map_N4923);

  rentals = [property1821, property1818, property1815, propertyN4923];
