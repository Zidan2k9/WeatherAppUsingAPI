class Weather{
    constructor(city,country){
        this.apiKey = '6f5dd6fd9a02cdf022005e3926e4811e';
        this.city = city;
        this.country = country;
    }

    //Get weather data from the API

    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    //Change the location

    changeLocation(city,country){
        this.city = city;
        this.country = country;
    }
}