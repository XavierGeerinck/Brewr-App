var InstallerActions = require('../actions/InstallerActions');
var InstallerUtil = require('../utils/InstallerUtil');
var Util = require('../utils/Util');
var InstallerSteps = require('../constants/InstallerStepConstants');
var Extensions = require('../constants/ExtensionConstants');

// Installer version and checksum
var VERSION = '4.3.26-98988-OSX',
    CHECKSUM = '3efddddbed7648d5bdfe11a7a341591d05135cda7298792d93334a5faa83d124';

// Installer vars and methods
var isInstalled = InstallerUtil.isInstalled('/Applications/VirtualBox.app');

var downloadUrl = 'http://download.virtualbox.org/virtualbox/' + VERSION.split('-')[0] + '/VirtualBox-' + VERSION + '.' + Extensions.dmg;

function download(percentCallback) {
    // Return a promise
    return InstallerUtil.downloadFile(downloadUrl, '/tmp/VirtualBox-', VERSION, Extensions.dmg, CHECKSUM, percentCallback);
};

function start() {
    var cmd = "";
    cmd += 'hdiutil attach  /tmp/VirtualBox-' + VERSION + '.' + Extensions.dmg; // Attach DMG
    cmd += ' && ';
    cmd += 'installer -pkg /Volumes/VirtualBox/VirtualBox.pkg -target /'; // Start PKG in the dmg
    cmd += ' && ';
    cmd += 'hdiutil detach /Volumes/VirtualBox'; // Unmount
    return InstallerUtil.startElevatedInstaller(cmd);
};

// exports
module.exports.steps = [{
    name: "Downloading Virtualbox",
    description: "Virtualbox needs to be installed to be able to start virtual environments.",
    next_step_idx: InstallerSteps.VIRTUALBOX_DOWNLOAD,
    run: function() {
        console.log("Installed? " + isInstalled);

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
    name: "Installing Virtualbox",
    description: "Virtualbox needs to be installed to be able to start virtual environments.",
    next_step_idx: InstallerSteps.VIRTUALBOX_INSTALL,
    run: function() {
        // Run the installer, it will always be in the /tmp folder
        if (!isInstalled) {
            return start();
        }

        return new Promise(function(resolve, reject) {
            resolve();
        });
    }
}];
