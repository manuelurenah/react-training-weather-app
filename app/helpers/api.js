import openWeaterApiKey from '../config/keys';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/';

const generateRouteParams = queryStringData => (
    Object.keys(queryStringData).map(key => (
        `${key}=${encodeURIComponent(queryStringData[key])}`
    )).join('&')
);

const createRequestUrl = (type, queryStringData) => (
    `${BASE_URL}${type}?${generateRouteParams(queryStringData)}`
);

const getQueryStringData = city => ({
    q: city,
    type: 'accurate',
    APPID: openWeaterApiKey,
    cnt: 5,
});

export const fetchCurrentWeather = (city) => {
    const queryStringData = getQueryStringData(city);
    const requestUrl = createRequestUrl('weather', queryStringData);

    return fetch(requestUrl).then(response => response.json());
};

export const fetchForecastWeather = (city) => {
    const queryStringData = getQueryStringData(city);
    const requestUrl = createRequestUrl('forecast/daily', queryStringData);

    return fetch(requestUrl).then(response => response.json());
};
