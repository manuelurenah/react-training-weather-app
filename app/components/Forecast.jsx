import React, { Component } from 'react';
import { parse } from 'query-string';
import CircularProgress from 'material-ui/CircularProgress';
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

    makeApiRequest(city) {
        fetchForecastWeather(city, true)
        .then((weatherData) => {
            console.log(weatherData);
            this.setState({
                loading: false,
                weatherData,
            });
        });
    }

    render() {
        const { loading } = this.state;

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
                            <h1 className="white-text">Forecast</h1>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Forecast;
