// Imports
var InstallerActions = require('../actions/InstallerActions');
var InstallerUtil = require('./InstallerUtil');
var VagrantInstaller = require('../installers/VagrantInstaller');
var VirtualboxInstaller = require('../installers/VirtualboxInstaller');
var Util = require('./Util');

// Convenience method for all installer steps
function loadInstallers() {
    var steps = [];
    steps.push.apply(steps, VagrantInstaller.steps);
    steps.push.apply(steps, VirtualboxInstaller.steps);
    return steps;
};

module.exports = {
    steps: loadInstallers(),

    loadSteps: function() {
        var data = this.steps
        InstallerActions.receiveSteps(data);
    },

    setStep: function(stepId) {
        InstallerActions.setStep(stepId);
    }
};
