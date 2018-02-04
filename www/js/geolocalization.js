function getLocation() {

  if (!navigator.geolocation){
    console.log("<p>Geolocation is not supported by your browser</p>");
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    console.log('Latitude is ' + latitude + '°. Longitude is ' + longitude + '°.');

    return [latitude, longitude];

  };

  function error(e) {
  	console.log(e);
  };


  navigator.geolocation.getCurrentPosition(success, error);
}