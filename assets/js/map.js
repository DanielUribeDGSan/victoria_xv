function initMap() {
    // The location of Uluru
    const uluru = { lat: 19.669102177694445, lng: -101.22173754409862 };

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: uluru,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#131722"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#131722"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#131722"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#131722"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#131722"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#131722"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#131722"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#131722"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#131722"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#131722"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#131722"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#131722"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]

    });
    var icon = {
        url: "https://firebasestorage.googleapis.com/v0/b/victoria-637cb.appspot.com/o/ubicacion.svg?alt=media&token=01460f25-777b-467f-84c9-24c9ce91b3f2", // url
        scaledSize: new google.maps.Size(40, 40), // scaled size
        Origin: new google.maps.Point(0, 0), // Origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'XV años de Victoria',
        icon: icon,
    });

    var contentString = '<div class="info-window-content"><center><h6 style="margin-bottom:0.6rem">Ubicación del salón</h6></center>' +
        '<a href="https://www.google.com.mx/maps/dir/19.7153882,-101.2289103/Quinta+El+Ciervo,+Camelina,+La+Camelina,+Morelia,+Michoac%C3%A1n/@19.6909849,-101.2462349,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x842d0c388eb1ff7f:0xd069816204c3e450!2m2!1d-101.2218341!2d19.6687789" style="color: white " target="_blank " class="btn btn-fill btn-primary ">Ver dirección completa</a></div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });


}