import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../containers/App';

const routes = (
    <BrowserRouter>
        <Route component={App} />
    </BrowserRouter>
);

export default routes;
