var exec = require('child_process').exec;
var Promise = require('bluebird');
var fs = require('fs');
var path = require('path');

module.exports = {
    exec: function(args, options) {
        options = options || {};

        return new Promise(function(resolve, reject) {
            exec(args, options, function(stderr, stdout, code) {
                if (code) {
                    var cmd = Array.isArray(args) ? args.join(' ') : args;
                    return reject(new Error(cmd + ' returned non zero exit code. Stderr: ' + stderr));
                }

                return resolve(stdout);
            });
        });
    },
    isWindows: function() {
        return process.platform === 'win32';
    },
    macAskSudo: function(cmd) {
        return process.cwd() + `/resources/macsudo -p "Administrative privileges needed." sh -c \"${cmd}\"`;
    }
};
