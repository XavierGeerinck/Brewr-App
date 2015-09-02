var fs = require('fs');
var path = require('path');
var request = require('request');
var progress = require('request-progress');
var Promise = require('bluebird');
var crypto = require('crypto');

module.exports = {
    checksum: function(filename) {
        return crypto.createHash('sha256').update(fs.readFileSync(filename), 'utf8').digest('hex');
    },
    downloadFile: function(url, fileLocation, checksum, percentCallback) {
        var self = this;
        return new Promise(function(resolve, reject) {
            // https://nodejs.org/api/path.html
            var dir = path.parse(fileLocation);

            // If the directory does not exist, create it
            if (!fs.existsSync(dir.dir)) {
                fs.mkdirSync(dir.dir);
            }

            // Check if file exists
            if (fs.existsSync(fileLocation)) {
                if (self.checksum(fileLocation) == checksum) {
                    return resolve();
                } else {
                    fs.unlinkSync(fileLocation);
                }
            }

            // Run the download
            progress(request({
                    uri: url,
                    rejectUnauthorized: false
                }), {
                    throttle: 2000,
                    delay: 500
                })
                .on('progress', function(state) {
                    if (percentCallback) {
                        percentCallback(state.percent);
                    }
                })
                .on('error', function(err) {
                    // Error while downloading
                    return reject(err);
                })
                .pipe(fs.createWriteStream(fileLocation))
                .on('error', function(err) {
                    console.log("done");
                    // Error while saving
                    return reject(err);
                })
                .on('close', function(err) {
                    // Saved
                    if (err) return reject(err);
                    return resolve();
                });
        });
    }
};
