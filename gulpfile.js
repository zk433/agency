var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

// Compiling scss into css task
gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

// Browser Sync task
gulp.task('browserSync', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'app'
		},
	})
});

// Minifying images task
gulp.task('images', function() {
	return gulp.src('app/assets/*')
		.pipe(cache(imagemin()))
		.pipe(gulp.dest('dist/assets'))
});

// Copying fonts to Dist
gulp.task('fonts', function() {
	return gulp.src('app/fonts/*')
		.pipe(gulp.dest('dist/fonts'))
});

// Watch task
gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

// Build task
gulp.task('build', ['images', 'fonts'], function() {
	console.log('Building files');
});