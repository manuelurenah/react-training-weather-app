import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Forecast from './Forecast';
import '../style.css';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/forecast" component={Forecast} />
    </Switch>
);

export default Main;
