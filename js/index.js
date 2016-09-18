
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            var lat= position.coords.latitude;
            var lng= position.coords.longitude;
            var forecast = "https://api.forecast.io/forecast/b63ff2dd51fac21a8433fc6e95b65a8a/"+ lat +","+ lng;
            $.ajax({

                dataType: "json",
                url: "http://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ lng +"&appid=4aa684b4b966ef5ad0eb51136c4fb8ed&units=metric",
                success: function (data){
                    alert("this works");
                }
            });
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}




var fayek = getLocation();
console.log (fayek);
