function initMaps(property_id) {
  'use strict';

  function setMapProperties(lat, long, zoom) {
    // Zoom Options: 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
    // Style Options:['roadmap', 'satellite', 'hybrid', 'terrain','styled_map']
    return {
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.roadmap,
      mapTypeControlStyle: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      center: { lat: lat, lng: long }
    };
  };

  function createMapOntoDOM(coordinates, propertyId, mapZoom) {
    var map = new google.maps.Map(document.getElementsByClassName("map")[0],
      setMapProperties(coordinates.lat, coordinates.long, mapZoom));

    panMapToArea(propertyId, map);

    return map;
  }

  function panMapToArea(propertyId, map) {
    var xPan = RENTALS[propertyId].mapPanBy.x;
    var yPan = RENTALS[propertyId].mapPanBy.y;

    if (xPan > 0 || yPan > 0) {
      map.panBy(RENTALS[propertyId].mapPanBy.x, RENTALS[propertyId].mapPanBy.y);
    }

    return;
  }

  function createMapMarker(coordinates, map, p_id) {
    return new google.maps.Marker({
      position: { lat: coordinates.lat, lng: coordinates.long },
      map: map,
      title: RENTALS[p_id].addr.replace("<br> ", "")
    });
  }

  function createMapMarkerContent(property_id) {
    return "<h4>" + RENTALS[property_id].addr + "</h4>" + "<p>" + RENTALS[property_id].features + "</p>";
  }

  function addMapMarkerListener(marker, info_window, map) {
    google.maps.event.addListener(marker, "click", function() {
      info_window.open(map, marker);
    });
  }

  function getMapCoordinates(property_id) {
    return { "lat": RENTALS[property_id].coordinates.latitude, "long": RENTALS[property_id].coordinates.longitude };
  }

  function createInfoWindow(property_id) {
    return new google.maps.InfoWindow({
      content: createMapMarkerContent(property_id)
    });
  }

  function placeMapMarker(p_id) {
    var coordinates = getMapCoordinates(p_id)
    console.log(RENTALS[p_id].mapZoom);
    var map = createMapOntoDOM(coordinates, p_id, RENTALS[p_id].mapZoom);
    var mapMarker = createMapMarker(coordinates, map, p_id);

    return addMapMarkerListener(mapMarker, createInfoWindow(p_id), map);
  }

  placeMapMarker(property_id);
}
