function GoogleMap(property) {
  this.rental = RENTALS[property];
  this.map = new google.maps.Map(document.getElementsByClassName("map")[0], {
    zoom: this.rental.mapZoom,
    mapTypeId: google.maps.MapTypeId.roadmap,
    mapTypeControlStyle: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    center: {
      lat: this.rental.coordinates.latitude,
      lng: this.rental.coordinates.longitude
    }
  })

  this.render = function() {
    this.infoWindow = new GoogleMapInfoWindow(property);
    this.map.panBy(this.rental.mapPanBy.x, this.rental.mapPanBy.y);
    new GoogleMapMarker(this.infoWindow, this.map, property).render()
  }
}

function GoogleMapMarker(infoWindow, GoogleMap, property) {
  this.rental = RENTALS[property];
  this.marker = new google.maps.Marker({
    position: {
      lat: this.rental.coordinates.latitude,
      lng: this.rental.coordinates.longitude
    },
    map: GoogleMap,
    title: this.rental.addr.replace("<br> ", "")
  });
  this.render = function() {
    google.maps.event.addListener(this.marker, "click", function() {
      infoWindow.open(GoogleMap, this.marker);
    });
  }
}

function GoogleMapInfoWindow(property) {
  this.rental = RENTALS[property];
  return new google.maps.InfoWindow({
    content: "<h4>" + this.rental.addr + "</h4>" +
      "<p>" + this.rental.features + "</p>"
  });
}
