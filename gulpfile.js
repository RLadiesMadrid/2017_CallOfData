'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
var webserver = require('gulp-webserver');

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
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('build', ['sass']);
gulp.task('default', ['sass:watch', 'webserver']);
