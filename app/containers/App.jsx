import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { lightBlue100, lightBlue500, lightBlue800, lightGreen500 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Main from '../components/Main';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weather: {
                location: 'Santiago',
                temperature: '30',
            },
        };

        this.muiTheme = getMuiTheme({
            fontFamily: 'Roboto, sans-serif',
            palette: {
                primary1Color: lightBlue500,
                primary2Color: lightBlue800,
                primary3Color: lightBlue100,
                accent1Color: lightGreen500,
            },
        });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div id="main-wrapper">
                    <AppBar
                        title="React Weather"
                    />
                    <Main />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
