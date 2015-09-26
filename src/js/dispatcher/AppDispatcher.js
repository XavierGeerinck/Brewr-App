var Dispatcher = require('flux').Dispatcher;

// Create instance
var AppDispatcher = new Dispatcher();

// Convenience method to handle dispatch requests
AppDispatcher.handleAction = function(action) {
    this.dispatch(action);
}

module.exports = AppDispatcher;
