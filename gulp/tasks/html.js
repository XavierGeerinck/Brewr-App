var gulp = require('gulp');
var gulpif = require('gulp-if');
var changed = require('gulp-changed');
var livereload = require('gulp-livereload');
var insertLines = require('gulp-insert-lines');

var options = {
    dev: true
};

gulp.task('html', function() {
    // Copy over html
    gulp.src('./src/*/index.html')
        .pipe(insertLines({
            'before': /<\/head>$/,
            'lineBefore': '<script src="http://localhost:35729/livereload.js"></script>'
        }))
        .pipe(gulpif(options.dev, livereload()))
        .pipe(gulp.dest('./build/'));
});
