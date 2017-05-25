import React, { Component } from 'react';
import { parse } from 'query-string';
import CircularProgress from 'material-ui/CircularProgress';
import Weather from './Weather';
import { fetchForecastWeather } from '../helpers/api';

class Forecast extends Component {
    constructor(props) {
        super(props);

        this.handleWeatherClick = this.handleWeatherClick.bind(this);
        this.makeApiRequest = this.makeApiRequest.bind(this);

        this.state = {
            loading: true,
            weatherData: {},
        };
    }

    componentDidMount() {
        this.city = parse(this.props.location.search).city; /* eslint react/prop-types: 0 */

        this.makeApiRequest(this.city);
    }

    componentWillReceiveProps(nextProps) {
        this.city = parse(nextProps.location.search).city;

        this.makeApiRequest(this.city);
    }

    makeApiRequest(city) {
        fetchForecastWeather(city, true)
        .then((weatherData) => {
            this.setState({
                loading: false,
                weatherData,
            });
        })
        .catch((error) => {
            console.log(error);
            this.props.history.push({
                pathname: '/',
                message: 'There was an error making the request. Please try again',
                error,
            });
        });
    }

    handleWeatherClick(weather) {
        this.props.history.push({
            pathname: `/details/${this.city}`,
            state: weather,
            city: this.city,
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
                                        day={day}
                                        key={day.dt}
                                        onWeatherClick={() => this.handleWeatherClick(day)}
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
