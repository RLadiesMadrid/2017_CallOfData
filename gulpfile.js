var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var fileinclude = require('gulp-file-include');
var csso        = require('gulp-csso');
var prefix      = require('gulp-autoprefixer');
var rename      = require("gulp-rename");
var prettify    = require('gulp-prettify');
var sourcemaps  = require('gulp-sourcemaps');
var imagemin    = require('gulp-imagemin');
var uglify      = require('gulp-uglify');

// Static Server + watching scss/html files
gulp.task('watch', ['sass', 'fileinclude', 'css', 'js', 'img', 'img_move', 'font'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("assets/scss/**/*.scss", ['sass']);
    gulp.watch("assets/css/*.css", ['css']);
    gulp.watch("assets/js/*.js", ['js']);
    gulp.watch("assets/img/*.img", ['img']);
    gulp.watch("assets/font/*.font", ['font']);
    gulp.watch("assets/html/**/*.html", ['fileinclude']);
});

// Building HTML files
gulp.task('fileinclude', function() {
    return gulp.src(['assets/html/**/*.html', '!assets/html/menu/*.html', '!assets/html/partials/*.html', '!assets/html/partials/blocks/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            context: {
                assets: 'min'
            }
        }))
        .pipe(prettify({indent_size: 4}))
        .pipe(gulp.dest('.'))
        .on('end', browserSync.reload);
});

gulp.task('fileinclude_build', function() {
    return gulp.src(['assets/html/**/*.html', '!assets/html/menu/*.html', '!assets/html/partials/*.html', '!assets/html/partials/blocks/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            context: {
                assets: 'min'
            }
        }))
        .pipe(prettify({indent_size: 4}))
        .pipe(gulp.dest('.'))
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    gulp.src("./assets/scss/*.scss")
        .pipe(sass())
        .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('sass_build', function() {
    gulp.src('./assets/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(csso())
        .pipe(rename(function (path) {
            path.basename += ".min"
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css/'));
});

// Move css file and create sourcemap file
gulp.task('css', function() {
    gulp.src('./assets/css/*.css')
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

gulp.task('css_build', function() {
    gulp.src('./assets/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(csso())
        .pipe(rename(function (path) {
            path.basename += ".min"
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css/'));
});

// Minification JS and create sourcemap file
gulp.task('js', function() {
    gulp.src('./assets/js/*.js')
        .pipe(gulp.dest('./js'))
        .pipe(browserSync.stream());
});

gulp.task('js_build', function() {
    gulp.src('./assets/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += ".min"
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./js'));
});

// Minification images
gulp.task('img', function() {
    gulp.src('./assets/img/**/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./assets/img'));
});

gulp.task('img_move', function() {
    gulp.src('./assets/img/**/**/*.*')
        .pipe(gulp.dest('./img'));
});

// Move fonts to build folder
gulp.task('font', function() {
    gulp.src('./assets/fonts/**/*')
        .pipe(gulp.dest('./fonts'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['watch']);

gulp.task('build', ['fileinclude_build', 'sass_build', 'css_build', 'js_build', 'img', 'img_move', 'font']);
