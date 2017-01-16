var RENTALS = [];

function Property(address, coordinates, image, type, description, features, floorplan, panOffset, mapZoom, map) {
  this.addr = address;
  this.coordinates = { "latitude": coordinates.latitude, "longitude": coordinates.longitude };
  this.image = image;
  this.category = type;
  this.description = description;
  this.features = features;
  this.floorplan = floorplan;
  this.mapPanBy = { "x": panOffset.x, "y": panOffset.y };
  this.mapZoom = mapZoom;
  this.map = map;
}

RENTALS = [
  property1821 =
  new Property("1821 7th Street <br> Menomonie, WI 54751", { "latitude": 44.865782, "longitude": -91.922486 }, ["1821_front.jpg", "1821_back.jpg",
    "1821_bath.jpg", "1821_bedroom1.jpg", "1821_bedroom2.jpg",
    "1821_bedroom3.jpg"],
    "4 Bedroom Apartment",
    "There are three units in this two-story townhouse style building, which was built in 2003.  There are four large bedrooms.  The three rooms on the second floor have vaulted ceilings with large closets and extra storage.  The kitchen, living room, laundry room and fourth bedroom are on the main floor.  Living/kitchen area has a walkout patio with view of wooded area. Each apartment includes central heat and air and a washer and dryer.  Private parking lot attached and is located less than a mile from UW-Stout campus. ", ["4 Bedrooms with privacy lock&nbsp;door&nbsp;knobs", "2 Bathrooms", "Walkout Patio", "Hardwood / Stamped Concrete Floors", "Dishwasher", "In - Unit Washer / Dryer", "Gas Heat", "Central Air Conditioning", "Private Parking Lot", "Pet - Friendly", "Snow Removal", "Lawn Care and Garbage included"], [
    "Room2-1821-7th-Street_DOWN.jpg", "Room2-1821-7th-Street_UP.jpg", "Parking-Map_1821-7th-Street.jpg"], { "x": 0, "y": -60 }, 15, {}),

  property1818 = new Property("1818 6th Street <br> Menomonie, WI 54751", { "latitude": 44.865979, "longitude": -91.9252027 }, ["1818_building2.jpg", "1818_building1.jpg", "1818_bath.jpg", "1818_bedroom1.jpg",
    "1818_bedroom2.jpg", "1818_bedroom3.jpg", "1818_kitchen.jpg", "1818_living-room2.jpg"],
    "4 Bedroom Apartment",
    "There are three units in this two-story townhouse style building, which was built in 2002.  There are four large bedrooms.  The three rooms on the second floor have vaulted ceilings with large closets and extra storage.  The kitchen, living room, laundry room and fourth bedroom are on the main floor.  Each apartment includes central heat and air and a washer and dryer.  Private parking lot attached and is located less than a mile from UW-Stout campus. ", ["4 Bedrooms with privacy lock&nbsp;door&nbsp;knobs", "2 Full Bathrooms", "Hardwood / Stamped Concrete Floors", "Dishwasher", "In - Unit Washer / Dryer", "Gas Heat", "Central Air Conditioning", "Private Parking Lot", "Pet - Friendly", "Snow Removal", "Lawn Care and Garbage included"], ["Room3-1818-6th-Street_DOWN.jpg", "Room3-1818-6th-Street_UP.jpg",
    "Parking-Map_1818-6th-Street.jpg"], { "x": 0, "y": -60 }, 15, {}),

  property1815 = new Property("1815 7th Street <br> Menomonie, WI 54751", { "latitude": 44.866102, "longitude": -91.9246957 }, ["1815_building.jpg", "1815_bedroom1.jpg", "1815_bedroom2.jpg", "1815_hallway.jpg", "1815_kitchen.jpg", "1815_living-room.jpg", "1815_bath.jpg"],
    "4 Bedroom Apartment",
    "There are four units in this single level building, which was built in 2000.  There are four spacious bedrooms and two bathrooms. Open concept floor plan with hardwood/stamped concrete floors.  Each apartment includes gas heat and a washer and dryer.Private parking lot attached and is located less than a mile from UW-Stout campus.", ["4 Bedrooms with privacy lock&nbsp;door&nbsp;knobs", "2 Bathrooms", "Open Concept Floor Plan", "Hardwood / Stamped Concrete Floors", "Ground - Level Living Quarters", "In - Unit Washer / Dryer", "Gas Heat", "Private Parking Lot", "Pet - Friendly", "Snow Removal", "Lawn Care and Garbage included"], ["Room1-1815-7th-Street.jpg", "Parking-Map_1815-7th-Street.jpg"], { "x": 0, "y": -60 }, 15, {}),

  propertyN4923 = new Property("N4923 - 572nd Street <br> Menomonie, WI 54751", { "latitude": 44.8589455, "longitude": -91.8753319 }, ["TH_exterior_front.jpg", "TH_exterior_back.jpg", "TH_kitchen.jpg", "TH_bedroom1.jpg", "TH_bedroom2.jpg", "TH_bedroom3.jpg", "TH_living-rm2.jpg", "TH_living-room.jpg", "TH_bath1.jpg", "TH_bath2.jpg"],
    "3 Bedroom Townhouse",
    "This is a classic, naturally well-lit single level townhouse with two car garage in quiet neighborhood.  1,340 sq ft of living space with country views that was built in 2000.  There are three bedrooms, two bathrooms, hardwood floors, cozy fireplace and open concept floor plan with walkout patio that leads out to spacious backyard.  It is conveniently located 5 miles south of I-94 and 5 miles SE of downtown Menomonie, WI.", ["Master suite with double closets and master bath with walk-in shower", "2 Bedrooms", "Full Bath located between bedrooms", "Open Concept Floor Plan", "Gas fireplace", "Washer / Dryer", "Dishwasher", "Central Air Conditioning", "Hardwood floors", "Walkout Patio to backyard and garden shed for extra storage", "Insulated 2 car garage with electric door opener, Snow Removal&#44; Lawn Care and Garbage included, Pet - Friendly"], ["Room4-Townhouse.jpg"], { "x": 125, "y": -100 }, 12, {}
  )
];
