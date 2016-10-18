var assert = chai.assert;
var expect = chai.expect;

describe('initMaps', function() {
  describe('configMapOptions(lt *float, ln *float)', function() {

    it('should set the center attribute\'s latitude to the value of lt', function () {

      expect();
    });

    it('should set the center attribute\'s longitude to the value of ln', function() {
      expect();
    });

  });
});

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
