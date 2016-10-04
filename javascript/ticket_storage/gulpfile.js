const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const htmlmin = require('gulp-htmlmin');
const server = require('gulp-server-livereload');
const autoprefixer = require('gulp-autoprefixer');

// CSS
cssSrc = './css/*.css';
cssDest = './dist/css/';

// JS
jsSrc = ['./app.js', './data/*.js', './js/*.js', './js/models/*.js'];
jsDest = 'dist/js';

//////////////////////////////////////////////////

// minifies HTML
gulp.task('minHTML', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true, collapseInlineTagWhitespace: true, removeComments: true, minifyJS: true}))
    .pipe(gulp.dest('dist'));
});


// concats, minifies and renames JS files
gulp.task('minJS', function() {
  return gulp.src(jsSrc)
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('app.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});

// minifies and autoprefixes CSS
gulp.task('minCSS', function() {
  return gulp.src(cssSrc)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(cssDest));
});

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(server({
      livereload: true,
      fallback: 'index.html',
      defaultFile: 'dist/index.html',
      open: false
    }));
});

gulp.task('default', ['minHTML', 'minJS', 'minCSS', "webserver"]);
