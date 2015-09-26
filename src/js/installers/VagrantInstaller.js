var InstallerActions = require('../actions/InstallerActions');
var InstallerUtil = require('../utils/InstallerUtil');
var Util = require('../utils/Util');
var InstallerSteps = require('../constants/InstallerStepConstants');
var Extensions = require('../constants/ExtensionConstants');

// Installer software version and checksum
var VERSION = '1.7.2',
    CHECKSUM = '78d02afada2f066368bd0ce1883f900f89b6dc20f860463ce125e7cb295e347c';

// installer vars and methods
var isInstalled = InstallerUtil.isInstalled('/usr/bin/vagrant');

var downloadUrl = 'https://dl.bintray.com/mitchellh/vagrant/vagrant_' + VERSION + '.' + Extensions.dmg;

function download(percentCallback) {
    // Return a promise
    return InstallerUtil.downloadFile(downloadUrl, '/tmp/Vagrant-', VERSION, Extensions.dmg, CHECKSUM, percentCallback);
};

function start() {
    var cmd = "";
    cmd += 'hdiutil attach  /tmp/Vagrant-' + VERSION + '.' + Extensions.dmg; // Attach DMG
    cmd += ' && ';
    cmd += 'installer -pkg /Volumes/Vagrant/Vagrant.pkg -target /'; // Start PKG in the dmg
    cmd += ' && ';
    cmd += 'hdiutil detach /Volumes/Vagrant'; // Unmount

    return InstallerUtil.startElevatedInstaller(cmd);
};

// exports
module.exports.steps = [{
    name: "Downloading Vagrant",
    description: "Vagrant is used to manage the virtualbox application, we are able to start, destroy and remove our boxes but also run the takeoff installer script to install the environments.",
    next_step_idx: InstallerSteps.VAGRANT_INSTALL,
    run: function() {
        if (!isInstalled) {
            return download(function(percent) {
                console.log(percent);
            });
        }

        return new Promise(function(resolve, reject) {
            resolve();
        });
    }
}, {
    name: "Installing Vagrant",
    description: "Vagrant is used to manage the virtualbox application, we are able to start, destroy and remove our boxes but also run the takeoff installer script to install the environments.",
    next_step_idx: InstallerSteps.DONE,
    run: function() {
        console.log("Installed? " + isInstalled);

        // Run the installer, it will always be in the /tmp folder
        if (!!isInstalled) {
            return start();
        }

        return new Promise(function(resolve, reject) {
            resolve();
        });
    }
}];
