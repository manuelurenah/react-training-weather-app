import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { white } from 'material-ui/styles/colors';
import Search from './Search/Search';
import fetchForecastWeather from '../helpers/api';

const styles = {
    hintStyle: {
        color: 'rgba(255, 255, 255, 0.5)',
    },
    inputStyle: {
        color: white,
    },
    raisedButton: {
        width: '100%',
    },
    textField: {
        width: '100%',
    },
};

class Dashboard extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            city: '',
            searchField: {
                text: '',
                error: '',
            },
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(city) {
        this.props.history.push({
            pathname: 'forecast',
            search: `?city=${city}`,
        });

        this.setState({
            city,
        });

        fetchForecastWeather(city, false);
        fetchForecastWeather(city, true);
    }

    handleInputChange(event) {
        event.preventDefault();

        this.setState({
            searchField: {
                text: event.target.value,
                error: '',
            },
        });
    }

    render() {
        return (
            <div id="dashboard">
                <div className="container">
                    <div className="section">
                        <div className="row">
                            <h1 className="col s12 white-text center">React <i className="fa fa-cloud" aria-hidden="true" /> Weather</h1>
                            <Search
                                hintText="Santiago, Dominican Republic"
                                onButtonClick={() => this.handleSearch(this.state.searchField.text)}
                                onInputChange={this.handleInputChange}
                                style={styles}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
