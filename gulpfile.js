var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('d3-plugin', function() {
  return gulp.src('src/**')
    .pipe(concat('d3-query-plugin.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['d3-plugin'])