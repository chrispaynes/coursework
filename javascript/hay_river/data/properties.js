  var map_1821 = {};
  var map_1818 = {};
  var map_1815 = {};
  var map_N4923 = {};
  var rentals = [];

  function Property(address, coordinates, image, type, description, floorplan, map) {
    this.addr = address;
    this.coordinates = { "latitude": coordinates.latitude, "longitude": coordinates.longitude };
    this.image = image;
    this.category = type;
    this.description = description;
    this.floorplan = floorplan;
    this.map = map;
  }

  var property1821 = new Property("1821 7th Street <br> Menomonie, WI 54751", { "latitude": 44.865782, "longitude": -91.922486 },
    "1821.jpg",
    "4 Bedroom Apartment",
    "PROP #1: 4 Bedrooms, Eat-in kitchen, 2 Bathrooms, Plenty of sun, Deck, Storage, Washing Machine/Dryer, Gas Stove, Personal Butler, Oversized Garage, Option for fully-furnished",
    "floor.jpg",
    map_1821);

  var property1818 = new Property("1818 6th Street <br> Menomonie, WI 54751", { "latitude": 44.865979, "longitude": -91.9252027 },
    "1818.jpg",
    "4 Bedroom Apartment",
    "PROP #2: 4 Bedrooms, Eat-in kitchen, 2 Bathrooms, Plenty of sun, Deck, Storage, Washing Machine/Dryer, Gas Stove, Personal Butler, Oversized Garage, Option for fully-furnished",
    "floor.jpg",
    map_1818);

  var property1815 = new Property("1815 7th Street <br> Menomonie, WI 54751", { "latitude": 44.866102, "longitude": -91.9246957 },
    "1815.jpg",
    "4 Bedroom Apartment",
    "PROP #3: 4 Bedrooms, Eat-in kitchen, 2 Bathrooms, Plenty of sun, Deck, Storage, Washing Machine/Dryer, Gas Stove, Personal Butler, Oversized Garage, Option for fully-furnished",
    "floor.jpg",
    map_1815);

  var propertyN4923 = new Property("N4923 - 572nd Street <br> Menomonie, WI 54751", { "latitude": 44.8589455, "longitude": -91.8753319 },
    "N4923.jpg",
    "3 Bedroom Townhouse",
    "PROP #4: 4 Bedrooms, Eat-in kitchen, 2 Bathrooms, Plenty of sun, Deck, Storage, Washing Machine/Dryer, Gas Stove, Personal Butler, Oversized Garage, Option for fully-furnished",
    "floor.jpg",
    map_N4923);

  rentals = [property1821, property1818, property1815, propertyN4923];
