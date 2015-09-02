var gulp = require('gulp');
var gulpUtil = require('gulp-util');

gulp.task('build-watch', ['less', 'concat', 'html'], function() {
    build();
});

gulp.task('build', ['js', 'less', 'concat', 'html'], function() {
    build();
});

function build() {
    // Copy over assets
    gulp.src('./src/main.js')               // The atom main entrypoint
        .pipe(gulp.dest('./build/'));

    gulp.src('./src/package.json')          // The package
        .pipe(gulp.dest('./build/'));

    gulp.src('./src/*/fonts/**')              // The fonts
        .pipe(gulp.dest('./build/'));

    gulp.src('./src/*/css/**/*.css')          // The CSS files
        .pipe(gulp.dest('./build/'));

    gulp.src('./src/*/img/**')                // The Images
        .pipe(gulp.dest('./build/'));

    gulp.src('./resources/**')          // The Resources
        .pipe(gulp.dest('./build/'));

    gulpUtil.log(gulpUtil.colors.green('Done Building'));
}
