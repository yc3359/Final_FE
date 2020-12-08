function showHistory() {
    document.getElementById('intro-content').style.display = "block";
    document.getElementById('map-content').style.display = "none";
    document.getElementById('gallery-content').style.display = "none";
    document.getElementById('diagram-content').style.display = "none";
    document.getElementById('minig-content').style.display = "none";
}

function showMap() {
    document.getElementById('intro-content').style.display = "none";
    document.getElementById('map-content').style.display = "block";
    document.getElementById('gallery-content').style.display = "none";
    document.getElementById('diagram-content').style.display = "none";
    document.getElementById('minig-content').style.display = "none";
}

function showGallery() {
    document.getElementById('intro-content').style.display = "none";
    document.getElementById('map-content').style.display = "none";
    document.getElementById('gallery-content').style.display = "block";
    document.getElementById('diagram-content').style.display = "none";
    document.getElementById('minig-content').style.display = "none";

}

function showDiagram() {
    document.getElementById('intro-content').style.display = "none";
    document.getElementById('map-content').style.display = "none";
    document.getElementById('gallery-content').style.display = "none";
    document.getElementById('diagram-content').style.display = "block";
    document.getElementById('minig-content').style.display = "none";

}

function showMiniG() {
    document.getElementById('intro-content').style.display = "none";
    document.getElementById('map-content').style.display = "none";
    document.getElementById('gallery-content').style.display = "none";
    document.getElementById('diagram-content').style.display = "none";
    document.getElementById('minig-content').style.display = "block";
}


var map;
var infowindow;

function initMap() {
    infowindow = new google.maps.InfoWindow();
    var cucuta = {
        lat: 20,
        lng: 0
    };

    map = new google.maps.Map(document.getElementById('map-content'), {
        zoom: 2,
        center: cucuta,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            "featureType": "all",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [{
                "weight": "0.5"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [{
                "lightness": "-50"
            }, {
                "saturation": "-50"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text",
            "stylers": [{
                "hue": "#009aff"
            }, {
                "saturation": "25"
            }, {
                "lightness": "0"
            }, {
                "visibility": "simplified"
            }, {
                "gamma": "1"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "saturation": "0"
            }, {
                "lightness": "100"
            }, {
                "gamma": "2.31"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "lightness": "20"
            }, {
                "gamma": "1"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": "-100"
            }, {
                "lightness": "-100"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "lightness": "0"
            }, {
                "saturation": "45"
            }, {
                "gamma": "4.24"
            }, {
                "visibility": "simplified"
            }, {
                "hue": "#00ff90"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "saturation": "-100"
            }, {
                "color": "#f5f5f5"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#666666"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "labels.icon",
            "stylers": [{
                "saturation": "-25"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "transit.station.airport",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "lightness": "50"
            }, {
                "gamma": ".75"
            }, {
                "saturation": "100"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }]
    });

    addMarker({
        lat: 31.2335,
        lng: 121.5056
    }, 'Shanghai Tower');
    addMarker({
        lat: 25.1972,
        lng: 55.2744
    }, 'Burj Khalifa');
    addMarker({
        lat: 21.4186,
        lng: 39.8267
    }, 'Abraj Al-Bait');
    addMarker({
        lat: 22.5331,
        lng: 114.0559
    }, 'Ping An International Financial Center');
    addMarker({
        lat: 37.5135,
        lng: 127.1027
    }, 'Lotte World Tower');
}

function addMarker(location, titulo) {

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(location),
        map: map,
        title: titulo
    });
    marker.setMap(map);

    google.maps.event.addListener(marker, 'click', function() {

        infowindow.setContent(titulo);
        infowindow.open(map, marker);
    });
}


