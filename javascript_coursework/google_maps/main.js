function initMaps() {
  // instantiates new Google Maps with pre-defined options and
  // places maps into specific DOM elements
  var sat_map = new google.maps.Map(document.getElementById("sat_map"), mapOptions);
  var ter_map = new google.maps.Map(document.getElementById("ter_map"), mapOptions);
  var sty_map = new google.maps.Map(document.getElementById("sty_map"), mapOptions);

  // google.maps.Map() creates an object within a DOM container and
  // accepts a mapOptions object
  // google.maps.Map(mapDiv:Element *object, opts?:MapOptions *object)
  sat_map.zoom = 17;
  sat_map.mapTypeId = "satellite";
  ter_map.mapTypeId = "terrain";
  sty_map.mapTypeId = "styled_map";
  sty_map.mapTypes.set('styled_map', styledMapType);

  var app_maps = [sat_map, ter_map, sty_map];

// setMarkers creates new map markers, places the markers on each map
// and creates event listeners for click events on each marker
function setMarkers() {
  var leFumoirMarker, louvreMarker;

  // creates custom map markers and
  // maps each marker onto every map
  app_maps.map(function(x) {
    leFumoirMarker = new google.maps.Marker({
      position: {lat: 48.8603923, lng: 2.3402404},
      map: x,
      title: "Le Fumoir"
    });

    louvreMarker = new google.maps.Marker({
      position: {lat: 48.8606146, lng: 2.3354553},
      map: x,
      title: "Louvre Museum / Musée du Louvre"
    });

    // creates click event listeners for each marker
    google.maps.event.addListener(louvreMarker, "click", function() {
      louvre_infoPopup.open(x, this.louvreMarker);
    });

    google.maps.event.addListener(leFumoirMarker, "click", function() {
      leFumoir_infoPopup.open(x, this.leFumoirMarker);
    });
  });
}

setMarkers();
}

// window.addEventListener and window.AttachEvent
// load Google maps upon page load
if(window.addEventListener) {
  window.addEventListener("load", initMaps, false);
}
if(window.attachEvent) {
  window.attachEvent("load", initMaps);
}