var fs = require('fs');
var request = require('request');
var progress = require('request-progress');
var Promise = require('bluebird');
var FileUtil = require('./FileUtil');
var Util = require('./Util');

module.exports = {
    virtualBoxVersion: '4.3.26-98988-OSX',
    virtualBoxChecksum: '3efddddbed7648d5bdfe11a7a341591d05135cda7298792d93334a5faa83d124',
    vagrantVersion: '1.7.2',
    vagrantChecksum: '78d02afada2f066368bd0ce1883f900f89b6dc20f860463ce125e7cb295e347c',
    isVirtualBoxInstalled: function() {
        return fs.existsSync('/Applications/VirtualBox.app');
    },
    isVagrantInstalled: function() {
        return fs.existsSync('/usr/bin/vagrant');
    },
    getVirtualBoxDownloadURL: function() {
        var version = this.virtualBoxVersion.split('-');
        return 'http://download.virtualbox.org/virtualbox/' + version[0] + '/VirtualBox-' + this.virtualBoxVersion + '.dmg';
    },
    getVagrantDownloadURL: function() {
        var version = this.virtualBoxVersion.split('-');
        return 'https://dl.bintray.com/mitchellh/vagrant/vagrant_' + this.vagrantVersion + '.dmg';
    },
    downloadVirtualBox: function(percentCallback) {
        return FileUtil.downloadFile(this.getVirtualBoxDownloadURL(), '/tmp/VirtualBox-' + this.virtualBoxVersion + '.dmg', this.virtualBoxChecksum, percentCallback);
    },
    downloadVagrant: function(percentCallback) {
        return FileUtil.downloadFile(this.getVagrantDownloadURL(), '/tmp/Vagrant-' + this.vagrantVersion + '.dmg', this.vagrantChecksum, percentCallback);
    },
    startVirtualBoxInstaller: function() {
        var cmd = "";
        cmd += 'hdiutil attach  /tmp/VirtualBox-' + this.virtualBoxVersion + '.dmg';    // Attach DMG
        cmd += ' && ';
        cmd += 'installer -pkg /Volumes/VirtualBox/VirtualBox.pkg -target /';           // Start PKG in the dmg
        cmd += ' && ';
        cmd += 'hdiutil detach /Volumes/VirtualBox';                                    // Unmount

        return Util.exec(Util.macAskSudo(cmd));
    },
    startVagrantInstaller: function() {
        var cmd = "";
        cmd += 'hdiutil attach  /tmp/Vagrant-' + this.vagrantVersion + '.dmg';    // Attach DMG
        cmd += ' && ';
        cmd += 'installer -pkg /Volumes/Vagrant/Vagrant.pkg -target /';           // Start PKG in the dmg
        cmd += ' && ';
        cmd += 'hdiutil detach /Volumes/Vagrant';                                 // Unmount

        return Util.exec(Util.macAskSudo(cmd));
    }
};
