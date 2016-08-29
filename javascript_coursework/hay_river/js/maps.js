function initMaps(property_id) {
// contains default options for a Google Maps Object
var map_1821_options = {
  // ZOOM LEVELS: 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
  zoom: 15,

  // mapTypeId accepts *string to define map style.
  // options:['roadmap', 'satellite', 'hybrid', 'terrain','styled_map']
  mapTypeId: google.maps.MapTypeId.roadmap,

  mapTypeControlStyle: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,

  // centers the map around specific coordinates
  center: {lat: 44.865782, lng: -91.922486}
};

var map_1818_options = {
  // ZOOM LEVELS: 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
  zoom: 15,

  // mapTypeId accepts *string to define map style.
  // options:['roadmap', 'satellite', 'hybrid', 'terrain','styled_map']
  mapTypeId: google.maps.MapTypeId.roadmap,

  mapTypeControlStyle: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,

  // centers the map around specific coordinates
  center: {lat: 44.865979, lng: -91.9252027}
};

var map_1815_options = {
  // ZOOM LEVELS: 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
  zoom: 15,

  // mapTypeId accepts *string to define map style.
  // options:['roadmap', 'satellite', 'hybrid', 'terrain','styled_map']
  mapTypeId: google.maps.MapTypeId.roadmap,

  mapTypeControlStyle: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,

  // centers the map around specific coordinates
  center: {lat: 44.866102, lng: -91.9246957}
};

var map_N4923_options = {
  // ZOOM LEVELS: 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
  zoom: 15,

  // mapTypeId accepts *string to define map style.
  // options:['roadmap', 'satellite', 'hybrid', 'terrain','styled_map']
  mapTypeId: google.maps.MapTypeId.roadmap,

  mapTypeControlStyle: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,

  // centers the map around specific coordinates
  center: {lat: 44.8589455, lng: -91.8753319}
};

////////////////////////////////////////
  // instantiates new Google Maps with pre-defined options and
  // places maps into specific DOM elements
  console.log("prop id", typeof(property_id), property_id)

  if(parseInt(property_id) == 0) {
    map_1821 = new google.maps.Map(document.getElementsByClassName("map")[0], map_1821_options);
  }

  if(parseInt(property_id) == 1) {
      map_1818 = new google.maps.Map(document.getElementsByClassName("map")[0], map_1818_options);
  }

  if(parseInt(property_id) == 2) {
      map_1815 = new google.maps.Map(document.getElementsByClassName("map")[0], map_1815_options);
  }

  if(parseInt(property_id) == 3) {
      map_N4923 = new google.maps.Map(document.getElementsByClassName("map")[0], map_N4923_options);
  }

  // google.maps.Map() creates an object within a DOM container and
  // accepts a mapOptions object
  // google.maps.Map(mapDiv:Element *object, opts?:MapOptions *object)
  // sat_map.zoom = 17;
  // sat_map.mapTypeId = "satellite";
  // ter_map.mapTypeId = "terrain";
  // sty_map.mapTypeId = "styled_map";
  // sty_map.mapTypes.set('styled_map', styledMapType);

////////////////////////////////////////
// DOM descriptions for InfoWindow that pops up when clicking a Google Map markers
var map_1821_desc = "<h4>1821</h4>" + "Short Property Description";
var map_1818_desc = "<h4>1818</h4>" + "Short Property Description";
var map_1815_desc = "<h4>1815</h4>" + "Short Property Description";
var map_N4923_desc = "<h4>N4923</h4>" + "Short Property Description";


// infoPopup holds a Google Maps InfoWindow object
// new google.maps.InfoWindow creates a Google Maps
var map_1821_infoPopup = new google.maps.InfoWindow({content: map_1821_desc});
var map_1818_infoPopup = new google.maps.InfoWindow({content: map_1818_desc});
var map_1815_infoPopup = new google.maps.InfoWindow({content: map_1815_desc});
var map_N4923_infoPopup = new google.maps.InfoWindow({content: map_N4923_desc});

////////////////////////////////////////


  // setMarkers creates new map markers, places the markers on each map
  // and creates event listeners for click events on each marker
  function setMarkers() {
    // createsMarker() creates custom map markers using latitude and
    // longitude *float coordinates. The marker is placed on a map
    // *object and a title *string is added for an info popup
    // createMarker(lt *float, ln *float, mp *object, ti *string)
    function createMarker(lt, ln, mp, ti) {
      console.log(typeof(lt), typeof(ln), typeof(mp), typeof(ti));
      return new google.maps.Marker({
        position: { lat: lt, lng: ln},
        map: mp,
        title: ti
      });
    };

    var map_1821_marker = createMarker(44.865782, -91.922486, map_1821, "1821 7th Street");
    var map_1818_marker = createMarker(44.865979, -91.9252027, map_1818, "1818 6th Street");
    var map_1815_marker = createMarker(44.866102, -91.9246957, map_1815, "1815 7th Street");
    var map_N4923_marker = createMarker(44.8589455, -91.8753319, map_N4923, "N4923 - 572nd Street");

    // setMarkerListener() creates a listener for a click event
    // on a marker for a specific map. When the marker is clicked
    // the popup is opened
    // setMarkerListener(marker *object, popup *object, map *object)
    function setMarkerListener(marker, popup, map) {
      google.maps.event.addListener(marker, "click", function() {
        popup.open(map, marker);
      });
    };

    // creates click event listeners for each marker
    setMarkerListener(map_1821_marker, map_1821_infoPopup, map_1821);
    setMarkerListener(map_1818_marker, map_1818_infoPopup, map_1818);
    setMarkerListener(map_1815_marker, map_1815_infoPopup, map_1815);
    setMarkerListener(map_N4923_marker, map_N4923_infoPopup, map_N4923);

  }
  ////////////////////////////////////////

  setMarkers();
}

// // window.addEventListener and window.AttachEvent
// // load Google maps upon page load
// if (window.addEventListener) {
//   window.addEventListener("load", initMaps, false);
// }
// if (window.attachEvent) {
//   window.attachEvent("load", initMaps);
// }