var gulp = require('gulp');
var gulpif = require('gulp-if');
var changed = require('gulp-changed');
var livereload = require('gulp-livereload');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');

var options = {
    dev: true
};

gulp.task('js', function() {
    gulp.src('./src/*/js/**/*.js')
        .pipe(gulpif(options.dev, changed('./build')))
        .pipe(sourcemaps.init())
        //.pipe(react())
        .pipe(babel({blacklist: ['regenerator']}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/'))
        .pipe(gulpif(options.dev, livereload()));
});
