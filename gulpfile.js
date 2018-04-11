var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('concat', function() {
  return gulp.src('./build/*.js')
    .pipe(concat('made-with-love.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('rename', function() {
  return gulp.src('./build/styles.css')
    .pipe(rename('made-with-love.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['concat', 'rename']);
