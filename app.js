//Init storage
const storage = new Storage();

//Get stored weather location
const weatherLocation = storage.getLocationData();

//Init weather object
//const weather = new Weather('Letterkenny', 'Ireland');
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//Init UI
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location

document.querySelector('#w-change-btn').addEventListener('click', (e) => {
    const city = document.querySelector('#city').value;
    const country = document.querySelector('#country').value;

    // weather.changeLocation('Lahore','Pakistan');
    // weather.changeLocation('Karachi','Pakistan');

    //Change the location
    weather.changeLocation(city,country);

    //Set the location in local storage
    storage.setLocation(city,country);

    //Fetch and display the weather
    getWeather();

    //Close the modal
    $('locModal').modal('hide');
})


function getWeather() {

    weather.getWeather().then(results => { // Print out the data to the console
        console.log(results);

        ui.paint(results);
    }).catch(err => console.log(err));
}