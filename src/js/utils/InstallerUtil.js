var fs = require('fs');
var request = require('request');
var progress = require('request-progress');
var Promise = require('bluebird');
var FileUtil = require('./FileUtil');
var Util = require('./Util');

module.exports = {
    isInstalled: function(path) {
        return fs.existsSync(path);
    },
    downloadFile: function(url, path, version, extension, checksum, percentCallback) {
        // Return a promise
        return FileUtil.downloadFile(url, path + version + '.' + extension, checksum, percentCallback);
    },
    // Convenience method to add custom checks, asking for sudo is a seperate concern
    startElevatedInstaller: function(cmd) {
        return Util.exec(Util.macAskSudo(cmd));
    }
};
