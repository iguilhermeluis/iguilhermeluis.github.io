var coordOrigem, coordDestino, bairroOrigem, bairroDestino, latCadastro, logCadastro, numeroOrigem, numeroDestino;
var meuArray,size,area,listaNomeArea,listaNomePA,listaPoligono,max_vtr,polygons,map;
var marker_objects = []; 
var spinner = "<div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div>";
var infowindow, geocoder, map;

function LimpaMarcadores(){
    for (var i = 0; i < marker_objects.length; i++) {
          marker_objects[i].setMap(null);
        }
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom:16,
        center: {lat: -22.528392, lng: -42.976442},
        mapTypeId: 'roadmap',
        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "hue": "#00d3ff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#58746e"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": "77"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#736868"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#736868"
                    },
                    {
                        "lightness": "50"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#45beaa"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "lightness": "0"
                    },
                    {
                        "gamma": "1.00"
                    },
                    {
                        "weight": "1.00"
                    }
                ]
            }
        ]
        
    });

    var meuArray;
    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    var infowindow = new google.maps.InfoWindow();   
    image = "https://image.ibb.co/ehB5fK/marcador_google.png";
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(-22.528392, -42.976442),
        map: map,
        title: "Humanna",
        icon: image,
        //label: "Humanna L"
    });
    google.maps.event.addListener(marker, "click", (function(marker) {
        return function(evt) {
        var content = marker.getTitle();
        infowindow.setContent(content);
        infowindow.open(map, marker);
        }
  })(marker));

  marker_objects.push(marker);
    
}

function CarregaMarcadoresNoMapa(){   
                
    image = "https://app.novoriocoop.com/assets/image/iconCarroOnline.png";
    marker = new google.maps.Marker({
    position: new google.maps.LatLng(parseFloat(-22.525283), parseFloat(-42.972831)),
    map: map,
    title: "Humanna",
    icon: image,
    label: "Humanna L"
  });

  var infowindow = new google.maps.InfoWindow();

  google.maps.event.addListener(marker, "click", (function(marker) {
    return function(evt) {
      var content = marker.getTitle();
      infowindow.setContent(content);
      infowindow.open(map, marker);
    }
  })(marker));

  marker_objects.push(marker);
};

//CarregaMarcadoresNoMapa();
