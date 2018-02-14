google.maps.event.addDomListener(window, 'load', init);

function init() {
    var myLatlng = new google.maps.LatLng(51.173832, 4.341789)
    
    var mapOptions = {
        zoom: 16,
        center: myLatlng,
        scrollwheel: false, 
        styles: [	{		featureType:"all",		elementType:"all",		stylers:[		{			invert_lightness:false		},		{			saturation:-100		},		{			lightness:30		},		{			gamma:0.5		},		{			hue:"#000000"		}		]	}	]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var contentString = "<p><strong>Goeminne</strong><br>Kapelstraat 185<br>2660  Hoboken</p>"
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: "Goeminne",
      styles: [	{		featureType:"all",		elementType:"all",		stylers:[		{			invert_lightness:false		},		{			saturation:-100		},		{			lightness:30		},		{			gamma:0.5		},		{			hue:"#000000"		}		]	}	]
    });
      
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
    infowindow.open(map,marker);
}