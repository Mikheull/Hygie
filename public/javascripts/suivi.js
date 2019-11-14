mapboxgl.accessToken = 'pk.eyJ1IjoibWlraGV1bGwiLCJhIjoiY2ppa24wbnVmMjAxZzNxcXAzbGxvcHdwcSJ9.PRr0Bp0Y-i2xUrJ5cBvbPw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/light-v10', //hosted style id
    center: [2.3797426, 48.8960154], // starting position
    zoom: 10 // starting zoom
});



map.on("load", function () {
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {
                            "description": "<strong>Votre localisation</strong> <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dapibus odio. Aliquam scelerisque orci vel nisl ornare, tempus tempus ligula egestas. Maecenas a ornare ante",
                            "icon": "town-hall"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [2.3797426, 48.8960154]
                        }
                    }
                ]
            }
        },
        "layout": {
        "icon-image": "{icon}-15",
        "icon-allow-overlap": true
        }
    });
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;
        
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        
        new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    });
        
    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });
        
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });


    /* Image: An image is loaded and added to the map. */
    map.loadImage("https://i.imgur.com/LllBVm4.png", function(error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);
        /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
        map.addLayer({
          id: "markers",
          type: "symbol",
          /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
          source: {
            type: "geojson",
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [2.3808462, 48.8700949]
                  }
                }
              ]
            }
          },
          layout: {
            "icon-image": "custom-marker",
          }
        });
      });


    
});