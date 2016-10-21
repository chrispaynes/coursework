const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const htmlmin = require('gulp-htmlmin');
const server = require('gulp-server-livereload');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const livereload = require('gulp-livereload');


// HTML
htmlSrc = './*.html';

// CSS
cssSrc = './css/*.css';
cssDest = './dist/css/';

// JS
jsSrc = ['./data/*.js', './js/*.js'];
jsDest = 'dist/js';

//////////////////////////////////////////////////

// minifies images
gulp.task('minIMGs', () =>
  gulp.src('./img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
  .pipe(livereload())
);

// minifies HTML
gulp.task('minHTML', function() {
  return gulp.src(htmlSrc)
    .pipe(htmlmin({
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});


// concats, minifies and renames JS files
gulp.task('minJS', function() {
  return gulp.src(jsSrc)
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest))
    .pipe(livereload());
});

// minifies and autoprefixes CSS
gulp.task('minCSS', function() {
  return gulp.src(cssSrc)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest(cssDest))
    .pipe(livereload());
});

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(server({
      livereload: true,
      fallback: 'index.html',
      defaultFile: 'index.html',
      open: true
    }))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  livereload.reload(["index.html"])
  gulp.watch(cssSrc, ['minCSS']);
  gulp.watch('./img/*', ['minIMGs']);
  gulp.watch(jsSrc, ['minJS']);
  gulp.watch(htmlSrc, ['minHTML']);
});

gulp.task('default', ['minHTML', 'minJS', 'minCSS', "minIMGs", "webserver", "watch"]);
