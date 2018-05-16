'use strict';

const watchify = require('watchify');
const browserify = require('browserify');
const babelify = require("babelify");
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const log = require('gulplog');
const sourcemaps = require('gulp-sourcemaps');
const assign = require('lodash.assign');
var uglify = require('gulp-uglify');
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
var webserver = require('gulp-webserver');

// add custom browserify options here
var customOpts = {
  entries: ['./src/index.js'],
	debug: false,
	sourceType: module
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts)); 

// add transformations here
b.transform(babelify, {presets: ["es2015"]});

gulp.task('js', function () {
  return b.bundle()
    .on('error', log.error.bind(log, 'Browserify Error'))
    .pipe(source('app.min.js'))
    .pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(uglify()) 
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('webserver', function () {
	gulp.src('./').pipe(webserver({
			livereload: true,
			host: '127.0.0.1',
			port: 8080,
			open: true,
			fallback: './index.html'
		}));
});

gulp.task('sass', function () {
	return gulp.src('./assets/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(rename('app.min.css'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('js:watch', function () {
	gulp.watch(['./assets/lang/**/*.js', './src/**/*.js'], ['js']);
});

gulp.task('build', ['sass', 'js']);
gulp.task('default', ['sass:watch', 'js:watch', 'webserver']);
