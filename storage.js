class Storage {
    constructor(){
      this.city;
      this.country;
      this.defaultCity = 'Letterkenny';
      this.defaultCountry = 'Ireland';
    }
    getLocationData(){
      if(localStorage.getItem('city') === null){//if there is no city in LS
        this.city = this.defaultCity;
      } else {
        this.city = localStorage.getItem('city')
      }
  
      if(localStorage.getItem('country') === null){// if there is no country in LS
        this.country = this.defaultCountry;
      } else {
        this.country = localStorage.getItem('country')
      }
  
      return {
        city: this.city,
        country: this.country
      }
    }
    setLocation(city, country){
      localStorage.setItem('city', city);
      localStorage.setItem('country', country);
  
    }
  }