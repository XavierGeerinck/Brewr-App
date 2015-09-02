var gulp = require('gulp');

// Less builder + watcher
var concat = require('gulp-concat');

gulp.task('concat', function() {
	gulp.src('./src/*/script/js/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./build/'));
});
