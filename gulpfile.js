const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const jade        = require('gulp-jade');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('jade', function() {
    return gulp.src(["src/jade/*.jade"])
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest("src"))
})


// Watch Sass & Serve
gulp.task('serve', ['sass', 'jade'], function() {
    browserSync.init({
        server: "./src"
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/jade/*.jade'], ['jade']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);
