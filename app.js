//Init weather object
const weather = new Weather('Letterkenny', 'Ireland');

//Init UI
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);

// weather.changeLocation('Lahore','Pakistan');
// weather.changeLocation('Karachi','Pakistan');


function getWeather() {

    weather.getWeather().then(results => { // Print out the data to the console
        console.log(results);

        ui.paint(results);
    }).catch(err => console.log(err));
}