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


