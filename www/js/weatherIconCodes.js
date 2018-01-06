//Icon codes from open weather map API
var codesImages = {
	"01d":"img/sunny.jpg",
	"02d":"img/cloudy.jpg",
	"03d":"img/cloudy.jpg",
	"04d":"img/cloudy.jpg",
	"09d":"img/rainy.jpg",
	"10d":"img/rainy.jpg",
	"11d":"img/stormy.jpg",
	"13d":"img/snowy.jpg",
	"50d":"img/foggy.jpg",
	"01n":"img/moony.jpg",
	"02n":"img/cloudy-n.jpg",
	"03n":"img/cloudy-n.jpg",
	"04n":"img/cloudy-n.jpg",
	"09n":"img/rainy-n.jpg",
	"10n":"img/rainy-n.jpg",
	"11n":"img/stormy-n.jpg",
	"13n":"img/snowy-n.jpg",
	"50n":"img/foggy-n.jpg"
};

var getImagePath = function(iconCodeApi){
	for(var key in codesImages){
		if(iconCodeApi == key)
			return codesImages[key];
	}
};