var gulp = require('gulp'),
    concat = require('gulp-concat'),
    del = require('del');

gulp.task('clean', function() {
  del('dist');
});

gulp.task('d3-plugin', function() {
  return gulp.src('src/**')
    .pipe(concat('d3-query-plugin.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['clean', 'd3-plugin'])