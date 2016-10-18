function initMaps(property_id) {
  // configMapOptions() defines and returns an object of map options
  // for zoom level, map type, control type
  // and latitude and longitude to center the map app
  // configMapOptions(lt *float, ln *float)
  function configMapOptions(lt, ln){
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

  // instantiates new Google Maps with pre-defined options and
  // places maps into the slideshow map's DOM element
  function renderMap(map_lat, map_lon) {
      return new google.maps.Map(document.getElementsByClassName("map")[0],
        configMapOptions(map_lat, map_lon));
  };

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

  // createMarkerDesc() creates text content within an info popup
  // createMarkerDesc(t *string, d *string)
  function createMarkerDesc(t, d) {
    return "<h4>" + t + "</h4>" + "<p>" + d + "</p>";
  }

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
      // created from content *strings passed to createMarkerDesc(t, d).
      // the popups open when clicking a Google Map marker
      // new google.maps.InfoWindow creates a Google Maps
      return setMarkerListener(
        createMarker(rentals[p_id].lat,
          rentals[p_id].lon,
          renderMap(rentals[p_id].lat, rentals[p_id].lon), rentals[p_id].addr),
        new google.maps.InfoWindow({
          content: createMarkerDesc(rentals[p_id].addr,
            rentals[p_id].desc)
        }),
        rentals[p_id].map);

  }
  ////////////////////////////////////////

  placeMarkers(property_id);
}
