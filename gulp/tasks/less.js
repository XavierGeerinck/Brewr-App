var gulp         = require('gulp');
var gulpUtil = require('gulp-util');
var less = require('gulp-less');
var gulpif = require('gulp-if');
var changed = require('gulp-changed');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var path = require('path');
var fs = require('fs');

var options = {
    dev: true
};

// Less builder + watcher
gulp.task('less', function() {
    var dirs = getDirectories('./src/');

    for (var key in dirs) {
        gulp.src('src/' + dirs[key] + '/css/less/main.less')
            .pipe(gulpif(options.dev, changed('./build/' + dirs[key])))
            .pipe(gulpif(options.dev, sourcemaps.init()))
        	.pipe(less())
            .pipe(gulpif(options.dev, sourcemaps.write()))
        	.on('error', function(error) {
        		gulpUtil.log(gulpUtil.colors.red(error.message));
        		gulpUtil.beep();
        	})
            .pipe(concat('main.css'))
            .pipe(gulpif(options.dev, livereload()))
        	.pipe(gulp.dest('./build/' + dirs[key] + '/css'));
    }
});

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}
