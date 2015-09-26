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

    gulp.src('./src/assets/**')              // The assets
        .pipe(gulp.dest('./build/assets/'));

    gulp.src('./src/styles/font-awesome.css')
        .pipe(gulp.dest('./build/styles/'));

    gulp.src('./resources/**')          // The Resources
        .pipe(gulp.dest('./build/'));

    gulpUtil.log(gulpUtil.colors.green('Done Building'));
}
