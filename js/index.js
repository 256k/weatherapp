function getweather(lat, lng){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ lng +"&appid=4aa684b4b966ef5ad0eb51136c4fb8ed&units=metric",
        success: function(data){
            $(".location").html(data.name);
            $(".weather").html(Math.ceil(data.main.temp) +"&#8451;");
            $(".condition").html(data.weather[0].main);
            $(".max").html("Max: "+data.main.temp_max+"&#8451;");
            $(".min").html("Min: "+data.main.temp_min+"&#8451;");
            $(".humidity").html("Hum: "+data.main.humidity + "%");

        }

    });
}

$.ajax({
  // dataType: "json",
  url: "http://ip-api.com/json",
  success: function(data){
    var lat = data.lat;
    var lng = data.lon;
    getweather(lat,lng);

  },
  error: function(err){
    alert("this fucked up for some reason" +err + err.message);
  }

});
