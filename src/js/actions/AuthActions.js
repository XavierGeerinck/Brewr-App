import AppDispatcher from '../dispatchers/AppDispatcher';
import AuthService from '../services/AuthService.js';
import * as actionTypes from '../constants/ActionTypes';

/**
 * This action creator is the gateway between the server and the view!
 * Here we will push the event towards the view stack and call the server side
 * upon receiving a response from the server (in the api util), we will trigger
 * a server side event. These are then forwarded to the ServerActionCreators
 */
module.exports = {

    login: function (email, password) {
        // Dispatch the login event on the view
        AppDispatcher.handleViewAction({
            type: actionTypes.REQUEST_LOGIN,
            email: email,
            password: password
        });

        // login the user
        AuthService.login(email, password);
    },

    /**
     * Validate the token and get the user object (aka log user in with token)
     */
    getUser: function (token) {
        AppDispatcher.handleViewAction({
            type: actionTypes.REQUEST_USER,
            token: token
        });

        AuthService.getUser(token);
    },

    register: function (email, password, firstName, lastName) {
        AppDispatcher.handleViewAction({
            type: actionTypes.REQUEST_REGISTER,
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        });

        AuthService.register(email, password, firstName, lastName);
    },

    logout: function (token) {
        AppDispatcher.handleViewAction({
            type: actionTypes.REQUEST_LOGOUT,
            token: token
        });

        AuthService.logout(token);
    }
};
