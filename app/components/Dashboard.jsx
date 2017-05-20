import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { white } from 'material-ui/styles/colors';
import Search from './Search/Search';

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

    handleInputChange(event) {
        event.preventDefault();

        this.setState({
            searchField: {
                text: event.target.value,
                error: '',
            },
        });
    }

    handleSearch(city) {
        if (city) {
            this.props.history.push({
                pathname: 'forecast',
                search: `?city=${city}`,
            });
        } else {
            this.setState({
                searchField: {
                    error: 'Please enter a city',
                },
            });
        }
    }

    render() {
        return (
            <div id="dashboard">
                <div className="container">
                    <div className="section">
                        <div className="row">
                            <h1 className="col s12 white-text center">React <i className="fa fa-cloud" aria-hidden="true" /> Weather</h1>
                            <Search
                                errorText={this.state.searchField.error}
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
