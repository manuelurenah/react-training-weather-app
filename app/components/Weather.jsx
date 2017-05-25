/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../helpers/utils';

const IMAGE_BASE_URL = 'http://res.cloudinary.com/sparklottery/image/upload/v1495686022/';

const Weather = ({ day, onWeatherClick }) => (
    <div className="col s12 m6 l3 weather-item" onClick={onWeatherClick}>
        <img src={`${IMAGE_BASE_URL}${day.weather[0].icon}.png`} alt="Weather" />
        <div className="center white-text">
            <h4>{getDate(day.dt)}</h4>
        </div>
    </div>
);

Weather.propTypes = {
    day: PropTypes.object.isRequired,
    onWeatherClick: PropTypes.func,
};

Weather.defaultProps = {
    onWeatherClick: () => {},
};

export default Weather;
