getWeather(){
	const appid = "ac40fa4914a844cbb43379bcbab81383"; 
	const url = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=" + appid;
	var cityName = "";
	var iconId = "";
	var bgWeatherImagePath = "";
	var currentTemp = "";

	$.getJSON(url, (jsonFile)=>{
	  cityName = jsonFile.name;
		iconId = jsonFile.weather[0].icon;
		currentTemp = jsonFile.main.temp;
		currentTemp -= 273.16; //Kelvin to ºC
		currentTemp = currentTemp.toFixed(0);
		currentTemp += "ºC";

		//display weather conditions background image
		bgWeatherImagePath = getImagePath(iconId);
		$("body").css("background", "url('"+ bgWeatherImagePath +"') no-repeat center center fixed");
		
		//Show information
	  $(".weather-location-city").text(cityName);
		$(".weather-location-weathersymbol").attr("src", "http://openweathermap.org/img/w/" + iconId + ".png");
		$(".weather-temperature").text(currentTemp);

	});
}