import React from 'react';
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

const Dashboard = () => (
    <div id="dashboard">
        <div className="container">
            <div className="section">
                <div className="row">
                    <h1 className="col s12 white-text center">React <i className="fa fa-cloud" aria-hidden="true" /> Weather</h1>
                    <Search
                        hintText="Santiago, Dominican Republic"
                        style={styles}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Dashboard;
