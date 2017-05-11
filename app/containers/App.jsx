import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';
import Main from '../components/Main';
import Search from '../components/Search/Search';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weather: {
                location: 'Santiago',
                temperature: '30',
            },
        };
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
