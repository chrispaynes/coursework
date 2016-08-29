// contains default options for a Google Maps Object
var mapOptions = {
  // ZOOM LEVELS: 1: World, 5: Landmass/continent, 10: City, 15: Streets, 20: Buildings
  zoom: 15,

  // mapTypeId accepts *string to define map style.
  // options:['roadmap', 'satellite', 'hybrid', 'terrain','styled_map']
  mapTypeId: google.maps.MapTypeId.HYBRID,

  mapTypeControlStyle: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,

  // centers the map around specific coordinates
  center: {lat: 48.8606111, lng: 2.3354553}
};