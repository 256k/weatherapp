
function getLocation() {
    if (navigator.geolocation) {
        console.log( navigator.geolocation.getCurrentPosition(function(position){
                var obj = {lat: position.coords.latitude, lng: position.coords.longitude};
                return obj;
        }, function(){console.log("getposition failed");}));
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}




var fayek = getLocation();
console.log (fayek);
// var forecast = "https://api.forecast.io/forecast/b63ff2dd51fac21a8433fc6e95b65a8a/"+ fayek.lat +","+ fayek.lng;
// $.ajax({
//
//     dataType: "json",
//     url: forecast,
//     success: function (data){
//         // alert(data.daily.temperatureMin);
//     }
// });
