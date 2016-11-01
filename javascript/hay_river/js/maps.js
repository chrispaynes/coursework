function initMaps(property_id) {
  'use strict';

  function setMapProperties(lat, lng) {
    // Zoom Options: 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
    // Style Options:['roadmap', 'satellite', 'hybrid', 'terrain','styled_map']
    return {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.roadmap,
      mapTypeControlStyle: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      center: { lat: lat, lng: lng }
    };
  };

  function createMapOntoDOM(coordinates) {
    return new google.maps.Map(document.getElementsByClassName("map")[0],
      setMapProperties(coordinates.lat, coordinates.lon));
  }

  function createMapMarker(coordinates, map, title) {
    return new google.maps.Marker({
      position: { lat: coordinates.lat, lng: coordinates.lon },
      map: map,
      title: title.replace("<br> ", "")
    });
  }

  function createMapMarkerContent(property_id) {
    return "<h4>" + rentals[property_id].addr + "</h4>" + "<p>" + rentals[property_id].desc + "</p>";
  }

  function addMapMarkerListener(marker, info_window, map) {
    google.maps.event.addListener(marker, "click", function() {
      info_window.open(map, marker);
    });
  }

  function getMapCoordinates(property_id) {
    return { "lat": rentals[property_id].lat, "lon": rentals[property_id].lon };
  }

  function createInfoWindow(property_id) {
    return new google.maps.InfoWindow({
      content: createMapMarkerContent(property_id)
    });
  }

  function placeMapMarker(p_id) {
    var coordinates = getMapCoordinates(p_id);
    var mapMarker = createMapMarker(coordinates, createMapOntoDOM(coordinates), rentals[p_id].addr);

    return addMapMarkerListener(mapMarker, createInfoWindow(p_id), rentals[p_id].map);
  }

  placeMapMarker(property_id);
}
