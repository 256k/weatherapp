
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        alert ("lat :" + position.coords.latitude +"lng :" + position.coords.longitude);
    });
    } else {
        alert ("Geolocation is not supported by this browser.");
    }
}

getLocation();
