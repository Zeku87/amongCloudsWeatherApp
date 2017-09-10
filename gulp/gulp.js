var gulp = require('gulp');

gulp.task('html', funtion(){
    return gulp.src('src/index.html').pipe(gulp.dest('dist'));
});
