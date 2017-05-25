import React from 'react';
import PropTypes from 'prop-types';
import { convertTemp, getDate } from '../helpers/utils';

const IMAGE_BASE_URL = 'http://res.cloudinary.com/sparklottery/image/upload/v1495686022/';

const WeatherDetails = ({ location }) => {
    const weatherData = location.state;

    return (
        <div className="container">
            <div className="section">
                <div className="row weather-details center white-text">
                    <div className="col s12">
                        <h1>{location.city}</h1>
                        <img src={`${IMAGE_BASE_URL}${weatherData.weather[0].icon}.png`} alt="Weather" />
                        <h2>{getDate(weatherData.dt)}</h2>
                        <h4>{weatherData.weather[0].description}</h4>
                        <h4>Min Temp: {convertTemp(weatherData.temp.min)} ºF</h4>
                        <h4>Max temp: {convertTemp(weatherData.temp.max)} ºF</h4>
                        <h4>Humidity: {weatherData.humidity}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

WeatherDetails.propTypes = {
    location: PropTypes.object.isRequired,
};

export default WeatherDetails;
