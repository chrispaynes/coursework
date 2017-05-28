var gulp = require('gulp');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var minifyHTML = require('gulp-minify-html');
var csslint = require('gulp-csslint');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var jsonminify = require('gulp-jsonminify');
var jsonlint = require('gulp-jsonlint');
var watch = require('gulp-watch');

var CSS_source = ['./src/presentation/css/main.css'];
var HTML_source = './index.html';
var JS_source = ['./src/presentation/vendor/vue.min.js', './src/presentation/vendor/vue-router.min.js', './src/business/vendor/*.js', './src/presentation/**/*.js', './src/business/**/*.js', './src/business/router.js', './app.js'];
var PHP_source = ['./src/data/**/*'];
var DB_source = ['./src/database/*.csv'];

// lint all JavaScript files, excluding node_modules
gulp.task('lint', () => gulp.src(['**/*.js', '!node_modules/**', '!app.js'])
        .pipe(eslint())
        .pipe(eslint.format()));

// CSSmin concats and minifies css imports
gulp.task('CSSmin', () => gulp.src(CSS_source)
    .pipe(concatCss('./presentation/css/main.css'))
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist')));

// JSmin concats and renames all JS files.
gulp.task('JSmin', () => {
  gulp.src(JS_source)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist'));
});

// HTMLmin minifies HTML files
gulp.task('HTMLmin', () => {
  var opts = {
    conditionals: true,
    spare: true,
  };

  return gulp.src(HTML_source)
    // .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist'));
});

// PHPcopy copies all PHP files to dist
gulp.task('PHPcopy', () => gulp.src(PHP_source)
  .pipe(gulp.dest('dist/data/')));

// Datacopy copies all PHP files to dist
gulp.task('Datacopy', () => gulp.src(DB_source)
    .pipe(gulp.dest('dist/database/')));

// Watch Files For Changes
gulp.task('Watch', () => {
  gulp.watch('gulpfile.js', ['default']);
  gulp.watch(JS_source, ['JSmin']);
  gulp.watch(CSS_source, ['CSSmin']);
  gulp.watch(HTML_source, ['HTMLmin']);
  gulp.watch(PHP_source, ['PHPcopy']);
  gulp.watch(DB_source, ['Datacopy']);
});

// Will only run if the lint task is successful...
gulp.task('default', ['lint', 'HTMLmin', 'CSSmin', 'JSmin', 'PHPcopy', 'Datacopy', 'Watch'], () => {});
