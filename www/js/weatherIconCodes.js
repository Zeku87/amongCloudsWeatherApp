//Icon codes from open weather map API
var codesImages = {
	"01d":"img/sunny.jpg",
	"02d":"img/cloudy.jpg",
	"03d":"img/cloudy.jpg",
	"04d":"img/cloudy.jpg",
	"09d":"img/rainy.jpg",
	"010d":"img/rainy.jpg",
	"011d":"img/stormy.jpg",
	"013d":"img/snowy.jpg",
	"050d":"img/foggy.jpg",
	"01n":"img/sunny.jpg",
	"02n":"img/cloudy.jpg",
	"03n":"img/cloudy.jpg",
	"04n":"img/cloudy.jpg",
	"09n":"img/rainy.jpg",
	"010n":"img/rainy.jpg",
	"011n":"img/stormy.jpg",
	"013n":"img/snowy.jpg",
	"050n":"img/foggy.jpg"
};

var getImagePath = function(iconCodeApi){
	for(var key in codesImages){
		if(iconCodeApi == key)
			return codesImages[key];
	}
};