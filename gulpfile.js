var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    del = require('del');

gulp.task('clean', function() {
  del('dist');
});

gulp.task('d3-plugin', function() {
  return gulp.src('src/**')
    .pipe(concat('d3-query.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('d3-plugin-minified', function() {
  return gulp.src('src/**')
    .pipe(concat('d3-query.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['clean', 'd3-plugin', 'd3-plugin-minified'])