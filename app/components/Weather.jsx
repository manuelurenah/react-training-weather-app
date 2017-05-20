import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../helpers/utils';

const Weather = ({ date, icon }) => (
    <div className="col s12 m6 l3">
        <img src={`./app/assets/img/${icon}.png`} alt="Weather" />
        <div className="center white-text">
            <h4>{getDate(date)}</h4>
        </div>
    </div>
);

Weather.propTypes = {
    date: PropTypes.number.isRequired,
    icon: PropTypes.string,
};

Weather.defaultProps = {
    icon: '00d',
};

export default Weather;
