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
);

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
    .pipe(uglify())
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
      directoryListing: true,
      fallback: 'index.html',
      defaultFile: 'index.html',
      open: true
    }));
});

gulp.task('default', ['minHTML', 'minJS', 'minCSS', "minIMGs", "webserver"]);