var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');

gulp.task('styles', function(){

    //files to inject
    var injectScssFiles = gulp.src('src/scss/*.scss', {read : false});

    function transformFilePath(filePath){
	return '@import "' + filePath + '";';
    }
    
    var injectScssOptions = {
	transform : transformFilePath,
	starttag : '// inject:scss',
	endtag : '// endinject',
	addRootSlash : false
    };
    
    return gulp.src('src/main.scss')
	.pipe(inject(injectScssFiles, injectScssOptions))
	.pipe(sass())
	.pipe(gulp.dest('dist/css'));
});

gulp.task('html', ['styles'], function(){

    var injectFile = gulp.src(['dist/css/main.css']);
    
    var injectOptions = { addRootSlash : false, ignorePath : ['dist'] };
    
    return gulp.src('src/index.html')
	.pipe(inject(injectFile, injectOptions))
	.pipe(gulp.dest('dist'));
});
