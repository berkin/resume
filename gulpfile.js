var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  gulp.src('./assets/css/src/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
    .pipe(minifyCSS())
	.pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/css/src/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
