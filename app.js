// $.getJSON("comarques.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });

// var comarques = require('./comarques.json');
// console.log(comarques);

fetch("comarques.json")
  .then(response => response.json())
  .then(json => console.log(json));


const mapStyle = [
    {
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ visibility: "on" }, { color: "#fcfcfc" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ visibility: "on" }, { color: "#bfd4ff" }],
    },
];

const puntoInicial = {
    lng: 2,
    lat: 41.6,
    zoom: 6
}

let popup, color, fillColor = "green";
let lat_s = 0;
let lng_s = 0;

function initMap() {
    let myLatLng = { lat: lat_s, lng: lng_s};
    color = document.getElementById("color").selectedIndex;
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: puntoInicial.lat, lng: puntoInicial.lng },
        zoom: 8,
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,
        styles: mapStyle,
    });
    map.data.addGeoJson(comarques);
    map.data.setStyle({
        fillColor: fillColor
    });
}


document.querySelector('#popup').addEventListener('click', () => {
    popup = document.getElementById("popup").selectedIndex;
   
    if (popup == 0) {
        lat_s = 61.791272;
        lng_s = 2.163292;   
    }
    else if (popup == 1) {
        lat_s = 41.391272;
        lng_s = 1.0963292;   
    }   
    else if (popup == 2) {
        lat_s = 41.091272;
        lng_s = 1.153292;   
    } 
    else {
        lat_s = 41.991272;
        lng_s = 2.063292;   
    }

    initMap();
})

document.querySelector('#color').addEventListener('click', () => {

    color = document.getElementById("color").selectedIndex;

    if (color == 0) fillColor = "green";
    else if (color == 1) fillColor = "yellow";
    else if (color == 2) fillColor = "orange";
    else if (color == 3) fillColor = "red";

    initMap();

})