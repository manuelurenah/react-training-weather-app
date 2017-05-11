import openWeaterApiKey from '../config/keys';

export const fetchCurrentWeather = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&type=accurate&APPID=${openWeaterApiKey}`)
    .then(response => response.json())
    .catch((error) => {
        console.log(error);
    });
};

export const fetchForecastWeather = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${encodeURIComponent(city)}&type=accurate&APPID=${openWeaterApiKey}&cnt=5`)
    .then(response => response.json())
    .catch((error) => {
        console.log(error);
    });
};
