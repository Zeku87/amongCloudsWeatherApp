//Set date
getDate(){

	var today = function(){
		var date = new Date();

		var dayOfMonth = date.getDate();
		var dayOfWeekStr = "Sunday";
		var monthNameStr = "December";
		var year = date.getFullYear();

		switch (date.getDay()) {
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

		switch (date.getMonth()) {
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

		return dayOfWeekStr + ", " + dayOfMonth + " de " + monthNameStr + " " + year;
	}

	//Set the greeting based on the time
	var date = new Date();
	var hour = date.getHours();
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
	$(".main-clock").text(time);

	//Set date from date.js today function
	$(".main-date").text(today());
}
