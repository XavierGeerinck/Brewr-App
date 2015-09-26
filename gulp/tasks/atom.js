var gulp = require('gulp');
var atomshell = require('gulp-atom-shell');
var gulpif = require('gulp-if');
var shell = require('gulp-shell');
var livereload = require('gulp-livereload');
var insert = require('gulp-insert');

var options = {
    dev: true
};

// App builder
gulp.task('atom', ['build'], function () {
    return gulp.src('./build/**')
        .pipe(atomshell({
              version: '0.23.0',
              platform: 'darwin',
              winIcon: './resources/icon.ico',
              darwinIcon: './resources/icon.icns'
         }))
        .pipe(atomshell.zfsdest('./dist/app.zip'));
});

// App builder
gulp.task('atom-run', ['build'], function() {
    gulp.watch('src/styles/less/**/*.less', ['less']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/*.html', ['html']);

    livereload.listen();

    var env = process.env;
    env.NODE_ENV = 'dev';
    gulp.src('').pipe(shell(
        [
            //'`pwd`/node_modules/electron-prebuilt/dist/Electron.app/Contents/MacOS/Electron `pwd`/build'

            process.cwd() + "/node_modules/electron-prebuilt/dist/electron.exe build"
        ],
        {
            env: env
        }
    ));
});
