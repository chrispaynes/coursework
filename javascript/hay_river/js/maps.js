function initMaps(property_id) {
  'use strict';

  function setMapProperties(lat, long) {
    // Zoom Options: 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
    // Style Options:['roadmap', 'satellite', 'hybrid', 'terrain','styled_map']
    return {
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.roadmap,
      mapTypeControlStyle: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      center: { lat: lat, lng: long }
    };
  };

  function createMapOntoDOM(coordinates, propertyId) {
    var map = new google.maps.Map(document.getElementsByClassName("map")[0],
      setMapProperties(coordinates.lat, coordinates.long));

    panMapToArea(propertyId, map);

    return map;
  }

  function panMapToArea(propertyId, map) {
    var xPan = rentals[propertyId].mapPanBy.x;
    var yPan = rentals[propertyId].mapPanBy.y;

    if (xPan > 0 || yPan > 0) {
      map.panBy(rentals[propertyId].mapPanBy.x, rentals[propertyId].mapPanBy.y);
    }

    return;
  }

  function createMapMarker(coordinates, map, p_id) {
    return new google.maps.Marker({
      position: { lat: coordinates.lat, lng: coordinates.long },
      map: map,
      title: rentals[p_id].addr.replace("<br> ", "")
    });
  }

  function createMapMarkerContent(property_id) {
    return "<h4>" + rentals[property_id].addr + "</h4>" + "<p>" + rentals[property_id].features + "</p>";
  }

  function addMapMarkerListener(marker, info_window, map) {
    google.maps.event.addListener(marker, "click", function() {
      info_window.open(map, marker);
    });
  }

  function getMapCoordinates(property_id) {
    return { "lat": rentals[property_id].coordinates.latitude, "long": rentals[property_id].coordinates.longitude };
  }

  function createInfoWindow(property_id) {
    return new google.maps.InfoWindow({
      content: createMapMarkerContent(property_id)
    });
  }

  function placeMapMarker(p_id) {
    var coordinates = getMapCoordinates(p_id);
    var map = createMapOntoDOM(coordinates, p_id);
    var mapMarker = createMapMarker(coordinates, map, p_id);

    return addMapMarkerListener(mapMarker, createInfoWindow(p_id), map);
  }

  placeMapMarker(property_id);
}
