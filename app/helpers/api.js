import openWeaterApiKey from '../config/keys';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/';

const fetchForecastWeather = (city, forecast) => {
    fetch(`${BASE_URL}${forecast ? 'forecast/daily' : 'weather'}?q=${encodeURIComponent(city)}&type=accurate&APPID=${openWeaterApiKey}&cnt=5`)
    .then(response => response.json())
    .then((json) => {
        console.log(json);

        return json;
    })
    .catch((error) => {
        console.log(error);
    });
};

export default fetchForecastWeather;
