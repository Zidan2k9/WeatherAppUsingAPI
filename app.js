//Init weather object
const weather = new Weather('Letterkenny', 'Ireland');

//Get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);

// weather.changeLocation('Lahore','Pakistan');
// weather.changeLocation('Karachi','Pakistan');


function getWeather() {

    weather.getWeather().then(results => {
        console.log(results);
    }).catch(err => console.log(err));
}