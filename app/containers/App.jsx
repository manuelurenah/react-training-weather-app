import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';
import Main from '../components/Main';
import Search from '../components/Search/Search';
import { fetchCurrentWeather, fetchForecastWeather } from '../helpers/api';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            searchField: {
                text: '',
                error: '',
            },
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSearch(city) {
        this.setState({
            city,
        });

        fetchCurrentWeather(city);
        fetchForecastWeather(city);
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
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div id="main-wrapper">
                    <AppBar
                        iconElementRight={
                            <Search
                                hintText="Enter a City"
                                mini
                                onButtonClick={() => this.handleSearch(this.state.searchField.text)}
                                onInputChange={this.handleInputChange}
                            />
                        }
                        iconStyleRight={{ width: '25%' }}
                        showMenuIconButton={false}
                        title="React Weather"
                    />
                    <Main />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
