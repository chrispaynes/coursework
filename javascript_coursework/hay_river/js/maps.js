function initMaps(property_id) {
  // setMapOptions() defines map options for a zoom level, map type, control type
  // and latitude and longitude to center the map app
  // setMapOptions(z *int, mType *string, cStyle *string, lt *float, ln *float)
  function setMapOptions(z, mType, cStyle, lt, ln){
    return  {
              // ZOOM LEVELS: 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
              zoom: z,

              // mapTypeId accepts *string to define map style.
              // options:['roadmap', 'satellite', 'hybrid', 'terrain','styled_map']
              mapTypeId: google.maps.MapTypeId.mType,

              mapTypeControlStyle: google.maps.MapTypeControlStyle.cStyle,

              // centers the map around specific coordinates
              center: {lat: lt, lng: ln}
            };
  };

////////////////////////////////////////


// renderDOMmaps(map_id, m_obj, m_opts) {
  // var slide_map = document.getElementsByClassName("map")[0];

//   if(parseInt(map_id) == 0) {
//     return m_obj = new google.maps.Map(slide_map, m_opts);
//   }

// }


// TODO: REFACTOR 4 CONDITIONAL STATEMENTS
function renderDOMmaps(map_id) {
  map_id = parseInt(map_id);
  // slide_map isolates the slideshow map's DOM element
  var slide_map = document.getElementsByClassName("map")[0];

  // instantiates new Google Maps with pre-defined options and
  // places maps into specific DOM elements
  if(map_id == 0) {
    return map_1821 = new google.maps.Map(slide_map,
      setMapOptions(15, "roadmap", "HORIZONTAL_BAR", 44.865782, -91.922486));
  }

  if(map_id == 1) {
    return map_1818 = new google.maps.Map(slide_map,
      setMapOptions(15, "roadmap", "HORIZONTAL_BAR", 44.865979, -91.9252027));
  }

  if(map_id == 2) {
    return map_1815 = new google.maps.Map(slide_map,
      setMapOptions(15, "roadmap", "HORIZONTAL_BAR", 44.866102, -91.9246957));
  }

  if(map_id == 3) {
    return map_N4923 = new google.maps.Map(slide_map,
      setMapOptions(15, "roadmap", "HORIZONTAL_BAR", 44.8589455, -91.8753319));
  }

};

renderDOMmaps(property_id);

////////////////////////////////////////


// TODO: REMOVE INFO POPUP VARIABLES IN FAVOR OF FUNCTIONS

  // setMarkers creates new map markers, places the markers on each map
  // and creates event listeners for click events on each marker
  function setMarkers() {

      ////////////////////////////////////////

      // setMarkerDesc() creates text content within an info popup
      // setMarkerDesc(t *string, d *string)
      function setMarkerDesc(t, d) {
        return "<h4>" + t + "</h4>" + "<p>" + d + "</p>";
      }

      // infoPopup holds a Google Maps InfoWindow object
      // created from content *strings passed to setMarkerDesc(t, d).
      // the popups open when clicking a Google Map marker
      // new google.maps.InfoWindow creates a Google Maps
      var map_1821_infoPopup = new google.maps.InfoWindow({
        content: setMarkerDesc("1821", "Short Property Description")
      });

      var map_1818_infoPopup = new google.maps.InfoWindow({
        content: setMarkerDesc("1818", "Short Property Description")}
      );

      var map_1815_infoPopup = new google.maps.InfoWindow({
        content: setMarkerDesc("1815", "Short Property Description")}
      );

      var map_N4923_infoPopup = new google.maps.InfoWindow({
        content: setMarkerDesc("N4923", "Short Property Description")}
      );

      ////////////////////////////////////////


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