import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Dashboard = () => (
    <div id="dashboard">
        <div className="row">
            <h2 className="col s12 white-text center">Welcome to the React Weather Training App</h2>
            <h3 className="col s12 white-text center">Enter a City</h3>
            <TextField
                className="col s12 center"
                floatingLabelText="City"
            />
            <RaisedButton
                className="center"
                label="search"
            />
        </div>
    </div>
);

export default Dashboard;
