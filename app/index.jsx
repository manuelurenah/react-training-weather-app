import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <div id="container">
        <div className="section">
            <div className="row">
                <div className="green lighten-2 col s12 center">
                    <h1 className="white-text">Welcome to the React Weather Training App</h1>
                </div>
            </div>
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
