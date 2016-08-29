// creates custom Map Style
var styledMapType = new google.maps.StyledMapType(
  [{
    stylers: [{
      hue: '#2f4f4f'
    }, {
      saturation: -55
    }]
  }, {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{
      "color": "#2f4f4f"
    }, {
      visibility: 'simplified'
    }]
  }, {
    featureType: 'road',
    elementType: 'labels',
    stylers: [{
      visibility: 'off'
    }]
  }], {
    name: 'Styled Map'
  });