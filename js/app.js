//get geolocalization
const coords = getLocation();
const latitude = coords[0];
const longitude = coords[1];



//get date and time
getDate();

//Let's call weather API to get the icon code and current temperature
getWeather(latitude, longitude);