function GoogleMap(property) {
  this.map = new google.maps.Map(document.getElementsByClassName("map")[0], {
    zoom: RENTALS[property].mapZoom,
    mapTypeId: google.maps.MapTypeId.roadmap,
    mapTypeControlStyle: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    center: {
      lat: RENTALS[property].coordinates.latitude,
      lng: RENTALS[property].coordinates.longitude
    }
  })

  this.infoWindow = new GoogleMapInfoWindow(property);

  this.render = function() {
    this.map.panBy(RENTALS[property].mapPanBy.x, RENTALS[property].mapPanBy.y);
    new GoogleMapMarker(this.infoWindow, this.map, property).render()
  }
}

function GoogleMapMarker(infoWindow, GoogleMap, property) {
  this.marker = new google.maps.Marker({
    position: {
      lat: RENTALS[property].coordinates.latitude,
      lng: RENTALS[property].coordinates.longitude
    },
    map: GoogleMap,
    title: RENTALS[property].addr.replace("<br> ", "")
  });
  this.render = function() {
    google.maps.event.addListener(this.marker, "click", function() {
      infoWindow.open(GoogleMap, this.marker);
    });
  }
}

function GoogleMapInfoWindow(property) {
  this.init = new google.maps.InfoWindow({
    content: "<h4>" + RENTALS[property].addr + "</h4>" +
      "<p>" + RENTALS[property].features + "</p>"
  });
  return this.init;
}
