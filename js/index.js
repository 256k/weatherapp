
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            var lat= position.coords.latitude;
            var lng= position.coords.longitude;
            var forecast = "https://api.forecast.io/forecast/b63ff2dd51fac21a8433fc6e95b65a8a/"+ lat +","+ lng;
            $.GETJSON(forecast, function(position){
                    alert("this works");
                }
            });
        
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}




var fayek = getLocation();
console.log (fayek);
