import React from 'react/addons';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './components/pages/Login';
import LogoutPage from './components/pages/Logout';
import DashboardPage from './components/pages/Dashboard/Dashboard.react';
import AuthStore from './stores/AuthStore';
import { createHistory, useBasename } from 'history';
import NotFoundPage from './components/pages/NotFound/NotFound.js';

const history = useBasename(createHistory)({
    basename: 'auth-flow'
});

function requireAuth(nextState, replaceState) {
    if(!AuthStore.isLoggedIn) {
        replaceState({ nextPathname: nextState.location.pathname}, '/login');
    }
}

var routes = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute          component={DashboardPage} onEnter={requireAuth}/>
            <Route path="login"  component={LoginPage}/>
            <Route path="logout" component={LogoutPage} onEnter={requireAuth}/>
            <Route path="*"      component={NotFoundPage} />
        </Route>
    </Router>
);

export default routes;