var InstallerActions = require('../actions/InstallerActions');
var InstallerUtil = require('./InstallerUtil');
var Util = require('./Util');

module.exports = {
    steps: [
        {
            name: "Downloading Virtualbox",
            description: "Virtualbox needs to be installed to be able to start virtual environments.",
            next_step_idx: 1,
            run: function() {
                console.log("Installed? " + InstallerUtil.isVirtualBoxInstalled());

                if (!InstallerUtil.isVirtualBoxInstalled()) {
                    return InstallerUtil.downloadVirtualBox(function(percent) {
                        console.log(percent);
                    });
                }

                return new Promise(function(resolve, reject) {
                    resolve();
                });
            }
        },
        {
            name: "Installing Virtualbox",
            description: "Virtualbox needs to be installed to be able to start virtual environments.",
            next_step_idx: 2,
            run: function() {
                // Run the installer, it will always be in the /tmp folder
                if (!InstallerUtil.isVirtualBoxInstalled()) {
                    return InstallerUtil.startVirtualBoxInstaller();
                }

                return new Promise(function(resolve, reject) {
                    resolve();
                });
            }
        },
        {
            name: "Downloading Vagrant",
            description: "Vagrant is used to manage the virtualbox application, we are able to start, destroy and remove our boxes but also run the takeoff installer script to install the environments.",
            next_step_idx: 3,
            run: function() {
                if (!InstallerUtil.isVagrantInstalled()) {
                    return InstallerUtil.downloadVagrant(function(percent) {
                        console.log(percent);
                    });
                }

                return new Promise(function(resolve, reject) {
                    resolve();
                });
            }
        },
        {
            name: "Installing Vagrant",
            description: "Vagrant is used to manage the virtualbox application, we are able to start, destroy and remove our boxes but also run the takeoff installer script to install the environments.",
            run: function() {
                console.log("Installed? " + InstallerUtil.isVagrantInstalled());

                // Run the installer, it will always be in the /tmp folder
                if (!InstallerUtil.isVagrantInstalled()) {
                    return InstallerUtil.startVagrantInstaller();
                }

                return new Promise(function(resolve, reject) {
                    resolve();
                });
            }
        }
    ],

    loadSteps: function() {
        var data = this.steps;
        InstallerActions.receiveSteps(data);
    },

    setStep: function(stepId) {
        InstallerActions.setStep(stepId);
    }
};
