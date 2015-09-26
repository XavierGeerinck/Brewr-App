/**************************
 * AuthStore Events
 **************************/
// Requests (Client side events, example when pushing button)
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_USER = 'REQUEST_USER';
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';

// Responses (Response from the server API call)
export const RESPONSE_USER = 'RESPONSE_USER';
export const RESPONSE_LOGIN = 'RESPONSE_LOGIN';
export const RESPONSE_LOGOUT = 'RESPONSE_LOGOUT';

// Responses Errors (When something happened on the server)
export const RESPONSE_LOGIN_ERROR = 'RESPONSE_LOGIN_ERROR';
export const RESPONSE_USER_ERROR = 'RESPONSE_USER_ERROR';
export const RESPONSE_LOGOUT_ERROR = 'RESPONSE_LOGOUT_ERROR';
