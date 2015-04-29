var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    footer = require('gulp-footer'),
    header = require('gulp-header'),
    del = require('del');

gulp.task('clean', function() {
  del('dist');
  del('lib');
});

gulp.task('d3-plugin', function() {
  return gulp.src('src/**')
    .pipe(concat('d3-query.js'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('d3-plugin-minified', function() {
  return gulp.src('src/**')
    .pipe(concat('d3-query.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('node-module', function() {
  return gulp.src('src/**')
    .pipe(concat('d3-query.js'))
    .pipe(header('var d3 = require("d3");\n\n'))
    .pipe(footer('\n\nmodule.exports = d3;'))
    .pipe(gulp.dest('lib/'))
});

gulp.task('build', ['clean', 'd3-plugin', 'd3-plugin-minified', 'node-module']);