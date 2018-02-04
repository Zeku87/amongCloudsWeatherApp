function getLocation() {

	let latitude = 36.41;
	let longitude = -6.14;


  if (!navigator.geolocation){
    console.log("<p>Geolocation is not supported by your browser</p>");
    return;
  }

  function success(position) {
  	if(typeof(position.coords.latitude) !== 'undefined' &&
  		typeof(position.coords.longitude) !== 'undefined'){

	    latitude  = position.coords.latitude;
	    longitude = position.coords.longitude;

    	console.log('Latitude is ' + latitude + '°. Longitude is ' + longitude + '°.');
  	}
  };

  function error(e) {
  	console.log(e);
  };


  navigator.geolocation.getCurrentPosition(success, error);
  return [latitude, longitude];
}