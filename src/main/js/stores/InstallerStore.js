var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var InstallerStoreConstants = require('../constants/InstallerStoreConstants');
var EventEmitter = require('events').EventEmitter;
var InstallerAPI = require('../utils/InstallerAPI');

var fs = require('fs');

var _steps = [];
var _currentStep = null;

function setCurrentStep(stepId) {
    _currentStep = _steps[stepId];

    // Run step
    _currentStep
        .run()
        .then(function() {
            if (_currentStep.next_step_idx) {
                InstallerAPI.setStep(_currentStep.next_step_idx);
            }
        })
        .catch(function(err) {
            console.log(err);
        });
}

function loadSteps(steps) {
    _steps = steps;
}

var InstallerStore = assign({}, EventEmitter.prototype, {
    // Return all the steps
    getAll: function() {
        return _steps;
    },

    // Return the current step
    getCurrentStep: function() {
        return _currentStep;
    },

    // Emit change event
    emitChange: function() {
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    switch (action.actionType) {
        case InstallerStoreConstants.RECEIVE_STEPS:
            loadSteps(action.data);
            break;

        case InstallerStoreConstants.SET_STEP:
            setCurrentStep(action.data);
            break;

        default:
            // no op
    }

    // If action was responded to, emit change event
    InstallerStore.emitChange();

    return true;
});

module.exports = InstallerStore;
