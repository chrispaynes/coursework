function initMaps(property_id) {
  // setMapOptions() defines and returns an object of map options
  // for zoom level, map type, control type
  // and latitude and longitude to center the map app
  // setMapOptions(z *int, mType *string, cStyle *string, lt *float, ln *float)
  function setMapOptions(lt, ln){
    return  {
              // ZOOM LEVELS: 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
              zoom: 15,

              // mapTypeId accepts *string to define map style.
              // options:['roadmap', 'satellite', 'hybrid', 'terrain','styled_map']
              mapTypeId: google.maps.MapTypeId.roadmap,

              mapTypeControlStyle: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,

              // centers the map around specific coordinates
              center: {lat: lt, lng: ln}
            };
  };


function renderDOMmaps(map_id, map_lat, map_lon) {
  map_id = parseInt(map_id);
  // slide_map isolates the slideshow map's DOM element
  var slide_map = document.getElementsByClassName("map")[0];

  // instantiates new Google Maps with pre-defined options and
  // places maps into specific DOM elements
    return new google.maps.Map(slide_map,
      setMapOptions(map_lat, map_lon));
};

// setMarkerDesc() creates text content within an info popup
// setMarkerDesc(t *string, d *string)
function setMarkerDesc(t, d) {
  return "<h4>" + t + "</h4>" + "<p>" + d + "</p>";
}

// createsMarker() creates custom map markers using latitude and
// longitude *float coordinates. The marker is placed on a map
// *object and a title *string is added for an info popup
// createMarker(lt *float, ln *float, mp *object, ti *string)
function createMarker(lt, ln, mp, ti) {
  return new google.maps.Marker({
    position: { lat: lt, lng: ln},
    map: mp,
    title: ti
  });
};

// setMarkerListener() creates a listener for a click event
// on a marker for a specific map. When the marker is clicked
// the popup is opened
// setMarkerListener(marker *object, popup *object, map *object)
function setMarkerListener(marker, popup, map) {
  google.maps.event.addListener(marker, "click", function() {
    popup.open(map, marker);
  });
};

  // placeMarkers creates new map markers, places the markers on each map
  // and creates event listeners for click events on each marker
  function placeMarkers(p_id) {

    // TODO: improve commenting
    // generates a marker
    // creates click event listeners for each marker
      // infoPopup holds a Google Maps InfoWindow object
      // created from content *strings passed to setMarkerDesc(t, d).
      // the popups open when clicking a Google Map marker
      // new google.maps.InfoWindow creates a Google Maps
      return setMarkerListener(
        createMarker(app_rental_props[p_id].lat,
          app_rental_props[p_id].lon,
          renderDOMmaps(p_id, app_rental_props[p_id].lat, app_rental_props[p_id].lon), app_rental_props[p_id].address),
        new google.maps.InfoWindow({
          content: setMarkerDesc(app_rental_props[p_id].address,
            app_rental_props[p_id].desc)
        }),
        app_rental_props[p_id].map);

  }
  ////////////////////////////////////////

  placeMarkers(property_id);
}