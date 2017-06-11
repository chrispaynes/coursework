const gulp = require('gulp');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat');
const minifyHTML = require('gulp-minify-html');
const csslint = require('gulp-csslint');
const minifyCss = require('gulp-minify-css');
const concatCss = require('gulp-concat-css');
const jsonminify = require('gulp-jsonminify');
const jsonlint = require('gulp-jsonlint');
const watch = require('gulp-watch');

const CSS_source = ['./src/presentation/css/main.css'];
const HTML_source = './index.html';
const JS_source = ['./src/vendor/vue.min.js', './src/vendor/vue-router.min.js', './src/vendor/axios.min.js', './src/vendor/check-types.min.js', './src/presentation/**/*.js', './src/business/**/*.js', './src/business/router.js', './app.js'];
const PHP_source = ['./src/data/**/*'];
const DB_source = ['./src/database/**/*.csv'];

// lint all JavaScript source files
gulp.task('Lint', () => gulp.src(['src/**/*.js', '!src/vendor/*.js', 'app.js'])
    .pipe(eslint())
    .pipe(eslint.format())
);

// CSSmin concats and minifies css imports
gulp.task('CSSmin', () => gulp.src(CSS_source)
    .pipe(concatCss('./presentation/css/main.css'))
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'))
);

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
    .pipe(gulp.dest('dist/data/'))
);

// Datacopy copies all PHP files to dist
gulp.task('Datacopy', () => gulp.src(DB_source)
    .pipe(gulp.dest('dist/database/'))
);

// Watch Files For Changes
gulp.task('Watch', () => {
    gulp.watch('gulpfile.js', ['default']);
    gulp.watch(JS_source, ['JSmin']);
    gulp.watch(CSS_source, ['CSSmin']);
    gulp.watch(HTML_source, ['HTMLmin']);
    gulp.watch(PHP_source, ['PHPcopy']);
    gulp.watch(DB_source, ['Datacopy']);
});

gulp.task('default', ['HTMLmin', 'CSSmin', 'JSmin', 'PHPcopy', 'Datacopy', 'Watch'], () => {});
gulp.task('lint', ['Lint'], () => {});
