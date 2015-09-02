var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('serve', ['build-watch', 'browserify-watch'], function() {
	gulp.watch('src/css/less/**/*.less', ['less']);
	gulp.watch('src/script/js/**/*.js', ['scripts']);
	gulp.watch('src/*.html', ['html']);

	gulp.src('build/')
	.pipe(webserver({
		livereload: true,
		directoryListing: false,
		open: true
	}));
});
