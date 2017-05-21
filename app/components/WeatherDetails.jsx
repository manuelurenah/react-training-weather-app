import React from 'react';
import PropTypes from 'prop-types';
import { convertTemp, getDate } from '../helpers/utils';

const WeatherDetails = ({ location }) => {
    const weatherData = location.state;

    return (
        <div className="container">
            <div className="section">
                <div className="row weather-details center white-text">
                    <div className="col s12">
                        <h1>{location.city}</h1>
                        <img src={`/app/assets/img/${weatherData.weather[0].icon}.png`} alt="Weather" />
                        <h2>{getDate(weatherData.dt)}</h2>
                        <h4>{weatherData.weather[0].description}</h4>
                        <h4>Min Temp: {convertTemp(weatherData.temp.min)} ºC</h4>
                        <h4>Max temp: {convertTemp(weatherData.temp.max)} ºC</h4>
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