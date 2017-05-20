import React, { Component } from 'react';
import { parse } from 'query-string';
import CircularProgress from 'material-ui/CircularProgress';
import Weather from './Weather';
import { fetchForecastWeather } from '../helpers/api';

class Forecast extends Component {
    constructor(props) {
        super(props);

        this.makeApiRequest = this.makeApiRequest.bind(this);

        this.state = {
            loading: true,
            weatherData: {},
        };
    }

    componentDidMount() {
        const city = parse(this.props.location.search).city; /* eslint react/prop-types: 0 */

        this.makeApiRequest(city);
    }

    componentWillReceiveProps(nextProps) {
        const city = parse(nextProps.location.search).city;

        this.makeApiRequest(city);
    }

    makeApiRequest(city) {
        fetchForecastWeather(city, true)
        .then((weatherData) => {
            this.setState({
                loading: false,
                weatherData,
            });
        });
    }

    render() {
        const { loading, weatherData } = this.state;

        return (
            <div className={`weather-forecast center ${loading ? 'valign-wrapper' : ''}`}>
                {loading ?
                    <CircularProgress
                        size={200}
                        thickness={10}
                        style={{ width: '100%' }}
                    /> :
                    <div className="container">
                        <div className="section">
                            <h1 className="white-text">
                                {weatherData.city.name}
                            </h1>
                            <div className="days-container row">
                                {weatherData.list.map(day =>
                                    <Weather
                                        date={day.dt}
                                        icon={day.weather[0].icon}
                                        key={day.dt}
                                    />,
                                )}
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Forecast;
