//Set the greeting based on the time
var date = new Date();
var hour = date.getHours();
if( hour >= 5 && hour < 12 )
{
	$(".main-greeting").text("Buenos días");

} 
if( hour >= 12 && hour < 21)
{
	$(".main-greeting").text("Buenas tardes");

}
else
{
	$(".main-greeting").text("Buenas noches");
}

//Set time
var time = date.getHours() + ":" + date.getMinutes();
$(".main-clock").text(time);

//Set date from date.js today function
$(".main-date").text(today());

//Let's call weather API to get the icon code and current temperature
const appid = "ac40fa4914a844cbb43379bcbab81383"; 
const url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=" + appid;
var iconId = "";
var currentTemp = "";
$.getJSON(url, (jsonFile)=>{
	iconId = jsonFile.weather[0].icon;
	currentTemp = jsonFile.main.temp;
console.log(iconId);
console.log(currentTemp - 273.16);
});
