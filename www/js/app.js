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
if( hour >= 21 && hour < 5)
{
	$(".main-greeting").text("Buenas noches");
}

//Set time 
var time = date.getHours() + ":" + date.getMinutes();
$(".main-clock").text(time);

//Set date
var dayOfWeek = date.getDay();
var dayOfWeekStr = "Sunday";
switch (dayOfWeek) {
	case 0:
		dayOfWeekStr = "Domingo"
		break;
	case 1:
		dayOfWeekStr = "Lunes";
		break;
	case 2:
		dayOfWeekStr = "Martes";
		break;
	case 3:
		dayOfWeekStr = "Miércoles";
		break;
	case 4:
		dayOfWeekStr = "Jueves"
		break;
	case 5:
		dayOfWeekStr = "Viernes";
		break;
	case 6:
		dayOfWeekStr = "Sábado";
		break;
	default:
		dayOfWeekStr = "Sábado";
		break;
}

var dayOfMonth = date.getDate();

var monthName = date.getMonth();
var monthNameStr = "December";
switch (monthName) {
	case 0:
		monthNameStr = "Enero";
		break;
	case 1:
		monthNameStr = "Febrero";
		break;
	case 2:
		monthNameStr = "Marzo";
		break;
	case 3:
		monthNameStr = "Abril";
		break;
	case 4:
		monthNameStr = "Mayo";
		break;
	case 5:
		monthNameStr = "Junio";
		break;
	case 6:
		monthNameStr = "Julio";
		break;
	case 7:
		monthNameStr = "Agosto";
		break;
	case 8:
		monthNameStr = "Septiembre";
		break;
	case 9:
		monthNameStr = "Octubre";
		break;
	case 10:
		monthNameStr = "Noviembre";
		break;
	case 11:
		monthNameStr = "Diciembre";
		break;
}


var year = date.getFullYear();

var today = dayOfWeekStr + ", " + dayOfMonth + " de " + monthNameStr + " " + year;
$(".main-date").text(today);