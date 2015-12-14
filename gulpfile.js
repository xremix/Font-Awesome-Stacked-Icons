var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

gulp.task('default', function() {
	gulp.src('src/*.scss')
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 4 versions']
	}))
	.pipe(gulp.dest('dist/'))
	.pipe(minifyCss())
	.pipe(rename({
		suffix:'.min'
	}))
	.pipe(gulp.dest('dist/'));

	gulp.src('src/*.scss')
	.pipe(rename({
		prefix:'_'
	}))
	.pipe(gulp.dest('dist/'));

	gulp.src('src/*.less')
	.pipe(rename({
		prefix:'_'
	}))
	.pipe(gulp.dest('dist/'));
});