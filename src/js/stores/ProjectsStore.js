var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ProjectsConstants = require('../constants/ProjectsConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change_projects';
var _projects = {};

function loadProjects(data) {
    _projects = data;
}

var ProjectsStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _projects;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherIndex: AppDispatcher.register(function(payload) {
        switch (payload.actionType) {
            // Will probably add START, RESTART, STOP (aka pause), EDIT, ...
            case ProjectsConstants.RECEIVE_PROJECTS_DATA:
                loadProjects(payload.data);
                break;
        }

        ProjectsStore.emitChange();

        return true; // No errors, dispatcher needs this.
    })
});

module.exports = ProjectsStore;
