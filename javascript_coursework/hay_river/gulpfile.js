var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var htmlmin = require('gulp-htmlmin');
var server = require('gulp-server-livereload');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');


cssSrc = './css/*.css';
cssDest = './dist/css/';

jsSrc = ['./data/*.js', './js/*.js'];
jsDest = 'dist/js';


//////////////////////////////////////////////////
gulp.task('minIMGs', () =>
    gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('minHTML', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true, collapseInlineTagWhitespace: true, removeComments: true, minifyJS: true}))
    .pipe(gulp.dest('dist'));
});


gulp.task('minJS', function() {
  return gulp.src(jsSrc)
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});

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

 


// KEEP AT EOF
//////////////////////////////////////////////////
gulp.task('default', ['minHTML', 'minJS', 'minCSS', "minIMGs", "webserver"]);