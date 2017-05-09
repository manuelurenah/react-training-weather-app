import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import '../style.css';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Dashboard} />
        </Switch>
    </main>
);

export default Main;
