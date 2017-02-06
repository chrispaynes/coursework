var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');
var minifyHTML = require('gulp-minify-html');
var csslint = require('gulp-csslint');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var jsonminify = require('gulp-jsonminify');
var jsonlint = require('gulp-jsonlint');

var CSSsrc = ['app/styles/*.css', 'app/vendor/lemonade.css'];
var HTMLsrc = 'app/*.html';
var JSsrc = ['app/models/*.js',
             'app/views/*.js',
             'app/collections/*.js',
             'app/routes/*.js',
             'app/*.js'];

// CSSmin concats and minifies css imports
gulp.task('CSSmin', function() {
  return gulp.src(CSSsrc)
    .pipe(concatCss('styles/app.css'))
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'));
});

// JSmin concats and renames all JS files.
gulp.task('JSmin', function() {
  return gulp.src(JSsrc)
    .pipe(concat('emeraldApp.js'))
    .pipe(gulp.dest('dist'));
});

// JSmin concats and renames all JS files.
gulp.task('VendorCopy', function() {
  return gulp.src('app/vendor/*')
    .pipe(gulp.dest('dist/vendor'));
});


// HTMLmin minifies HTML files
gulp.task('HTMLmin', function() {
  var opts = {
    conditionals: true,
    spare: true
  };

  return gulp.src(HTMLsrc)
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist'));
});

gulp.task('Webserver', function() {
  gulp.src('dist/')
    .pipe(webserver({
      livereload: true,
      port: '1337'
    }));
});

// Watch Files For Changes
gulp.task('Watch', function() {
  gulp.watch('gulpfile.js', ['default']);
  gulp.watch(CSSsrc, ['CSSmin']);
  gulp.watch(HTMLsrc, ['HTMLmin']);
  gulp.watch(['app/*.js', 'app/**/*.js'], ['HTMLmin']);
});

// IMGcopy copies all static image assets to dist
gulp.task('IMGcopy', function() {
  var iSRC = 'assets/img/*.';
  return gulp.src([iSRC + 'jpg', iSRC + 'JPG', iSRC + 'png'])
    .pipe(gulp.dest('dist' + '/img'));
});

gulp.task('default', ['VendorCopy', 'IMGcopy', 'HTMLmin', 'CSSmin', 'JSmin', 'Webserver', 'Watch']);
