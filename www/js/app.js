//Set the greeting based on the time
var date = new Date();
var hour = date.getHours();
console.log(hour);
if( hour >= 5 && hour < 12 )
{
	$(".main-greeting").text("Buenos días");

} 
else if( hour >= 12 && hour < 21)
{
	$(".main-greeting").text("Buenas tardes");

}
else
{
	$(".main-greeting").text("Buenas noches");
}

//Set time
                                    //two digits
var time = date.getHours() + ":" + ( "0" + date.getMinutes()).slice(-2);
;
$(".main-clock").text(time);

//Set date from date.js today function
$(".main-date").text(today());

//Let's call weather API to get the icon code and current temperature
const appid = "ac40fa4914a844cbb43379bcbab81383"; 
const url = "http://api.openweathermap.org/data/2.5/weather?q=Chiclana de la Frontera,ES&appid=" + appid;
var iconId = "";
var bgWeatherImagePath = "";
var currentTemp = "";

$.getJSON(url, (jsonFile)=>{
	iconId = jsonFile.weather[0].icon;
	currentTemp = jsonFile.main.temp;
	currentTemp -= 273.16; //Kelvin to ºC
	currentTemp = currentTemp.toFixed(0);
	currentTemp += "ºC";

	//display weather conditions background image
	console.log(iconId);
	bgWeatherImagePath = getImagePath(iconId);
	console.log(bgWeatherImagePath);
	$("body").css("background", "url('"+ bgWeatherImagePath +"') no-repeat center center fixed");
	//$('.background-weather-image').attr('src', bgWeatherImagePath);
	
	//Show information
	$(".weather-location-weathersymbol").attr("src", "http://openweathermap.org/img/w/" + iconId + ".png");
	$(".weather-temperature").text(currentTemp);

});

//Overlay
$('.header-config').click(function(){
	console.log("click");
	$('.overlay').css('visibility', 'visible');
});

$('.overlay-close').click(function(){
	$('.overlay').css('visibility','hidden');
});

var cities = [
      "Cadiz",
      "Sevilla",
      "Cordoba",
      "Huelva",
      "Málaga",
      "Almería",
      "Jaén",
      "Badajoz",
      "Cáceres",
      "Mérida",
      "Madrid",
      "Guadalajara",
      "Ávila",
      "León",
      "Soria",
      "Salamanca",
      "Palencia",
      "Burgos",
      "Segovia",
      "Toledo",
      "Ciudad Real",
      "Zaragoza",
      "Albacete"
    ];
    $( ".overlay-city-input" ).autocomplete({
      source: cities
    });