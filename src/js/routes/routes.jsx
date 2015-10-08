import React from 'react/addons';
import { Route, DefaultRoute } from 'react-router';
import App from '../components/App';
import LoginPage from '../components/pages/Login';
import LogoutPage from '../components/pages/Logout';
import DashboardPage from '../components/pages/Dashboard/Dashboard.react';
import NotFoundPage from '../components/pages/NotFound/NotFound.js';

const createBrowserHistory = require('history/lib/createBrowserHistory');

let history = createBrowserHistory();

function requireAuth(nextState, replaceState) {
    if(!AuthStore.isLoggedIn) {
        replaceState({ nextPathname: nextState.location.pathname}, '/');
    }
}

export default (
    <Route path="/" handler={App}>
        <DefaultRoute        handler={DashboardPage} onEnter={requireAuth}/>
        <Route path="login"  handler={LoginPage}/>
        <Route path="logout" handler={LogoutPage} onEnter={requireAuth}/>
        <Route path="*"      handler={NotFoundPage} />
    </Route>
);