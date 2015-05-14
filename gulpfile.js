var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var src = gulp.src(['src/wrapper/start.js', 'src/core/**', 'src/wrapper/end.js']);

gulp.task('default', function() {
  src
    .pipe(concat('d3-extended.js'))
    .pipe(gulp.dest('.'))
    .pipe(uglify())
    .pipe(rename('d3-extended.min.js'))
    .pipe(gulp.dest('.'));
});