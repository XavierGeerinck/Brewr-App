import React from 'react/addons';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './components/pages/Login';
import LogoutPage from './components/pages/Logout';
import DashboardPage from './components/pages/Dashboard/Dashboard.react.js';
//import DashboardPage from './components/pages/Dashboard';
import AuthStore from './stores/AuthStore';

const createBrowserHistory = require("history/lib/createBrowserHistory");

let history = createBrowserHistory();

function requireAuth(nextState, replaceState) {
    if(!AuthStore.isLoggedIn) {
        replaceState({ nextPathname: nextState.location.pathname}, '/login');
    }
}

var routes = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute          component={DashboardPage} />
            <Route path="login"  component={LoginPage} />
            <Route path="logout" component={LogoutPage} />
        </Route>
    </Router>
);

export default routes;