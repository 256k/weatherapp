
function getLocation() {
    if (navigator.geolocation) {
        return {lat : position.coords.latitude, lng : position.coords.longitude}
    } else {
        alert ("Geolocation is not supported by this browser.");
    }
}

var userLocation = getLocation();
console.log(userLocation.lat);
console.log(userLocation.lng);
