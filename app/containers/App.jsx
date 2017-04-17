import React, { Component } from 'react';
import Main from '../components/Main';
import Navbar from '../components/Navbar';

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
            <div id="main-wrapper">
                <Navbar title="React Weather" />
                <Main />
            </div>
        );
    }
}

export default App;
