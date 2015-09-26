var AppDispatcher = require('../dispatcher/AppDispatcher');
var InstallerStoreConstants = require('../constants/InstallerStoreConstants');

var InstallerActions = {
    receiveSteps: function(steps) {
        AppDispatcher.handleAction({
            actionType: InstallerStoreConstants.RECEIVE_STEPS,
            data: steps
        })
    },

    setStep: function(stepId) {
        AppDispatcher.handleAction({
            actionType: InstallerStoreConstants.SET_STEP,
            data: stepId
        })
    }
};

module.exports = InstallerActions;
