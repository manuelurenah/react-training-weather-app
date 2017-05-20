import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';
import Dashboard from '../components/Dashboard';
import Forecast from '../components/Forecast';
import Search from '../components/Search/Search';
import '../style.css';

class App extends Component {
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
        this.handleTitleClick = this.handleTitleClick.bind(this);
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

    handleTitleClick() {
        this.props.history.push({
            pathname: '/',
            search: '',
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
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div id="main-wrapper">
                    <AppBar
                        iconElementRight={
                            <Search
                                errorText={this.state.searchField.error}
                                hintText="Enter a City"
                                mini
                                onButtonClick={() => this.handleSearch(this.state.searchField.text)}
                                onInputChange={this.handleInputChange}
                            />
                        }
                        iconStyleRight={{ width: '30%' }}
                        onTitleTouchTap={() => this.handleTitleClick()}
                        showMenuIconButton={false}
                        title="React Weather"
                        titleStyle={{ cursor: 'pointer' }}
                    />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Dashboard}
                        />
                        <Route
                            path="/forecast"
                            component={Forecast}
                        />
                    </Switch>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
