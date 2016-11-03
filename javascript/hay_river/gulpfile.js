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

// Static File Variable
const HTMLSource = './*.html';
const CSSSource = './css/*.css';
const CSSDestination = './dist/css/';
const JSSource = ['./data/*.js', './js/*.js'];
const JSDestination = 'dist/js';

gulp.task('minifyImages', () =>
  gulp.src('./img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
  .pipe(livereload())
);

gulp.task('minifyHTML', function() {
  return gulp.src(HTMLSource)
    .pipe(htmlmin({
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('minifyJS', function() {
  return gulp.src(JSSource)
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(JSDestination))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(JSDestination))
    .pipe(livereload());
});

gulp.task('minifyCSS', function() {
  return gulp.src(CSSSource)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(cleanCSS({ debug: true }, function(details) {}))
    .pipe(gulp.dest(CSSDestination))
    .pipe(livereload());
});

gulp.task('startWebserver', function() {
  gulp.src('dist')
    .pipe(server({
      livereload: true,
      fallback: 'index.html',
      open: false
    }))
    .pipe(livereload());
});

gulp.task('watchSourceFiles', function() {
  livereload.listen();
  livereload.reload(["index.html"])
  gulp.watch(CSSSource, ['minifyCSS']);
  gulp.watch('./img/*', ['minifyImages']);
  gulp.watch(JSSource, ['minifyJS']);
  gulp.watch(HTMLSource, ['minifyHTML']);
});

gulp.task('default', ['minifyHTML', 'minifyJS', 'minifyCSS', "minifyImages", "startWebserver", "watchSourceFiles"]);
