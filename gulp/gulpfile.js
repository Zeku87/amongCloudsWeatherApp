var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var csswring = require('csswring'); //estruja el codigo css
var autoprefixer = require('autoprefixer');
var watch = require('gulp-watch');

gulp.task('concat-js', function(){});

gulp.task('styles', function(){

    //files to inject, an alternative to concat//
    var injectScssFiles = gulp.src('src/scss/modules/*.scss', {read : false});

    function transformFilePath(filePath){
	return '@import "' + filePath + '";';
    }
    
    var injectScssOptions = {
	transform : transformFilePath,
	starttag : '// inject:scss',
	endtag : '// endinject',
	addRootSlash : false
    };


    var processors = [csswring, autoprefixer];
    
    return gulp.src('src/scss/main.scss')
	.pipe(inject(injectScssFiles, injectScssOptions))
	.pipe(sass())
	.pipe(postcss(processors))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('html', ['styles'], function(){

    var injectFile = gulp.src(['dist/css/main.css']);
    
    var injectOptions = { addRootSlash : false, ignorePath : ['dist'] };
    
    return gulp.src('src/index.html')
	.pipe(inject(injectFile, injectOptions))
	.pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    watch(['src/scss/modules/*.scss', 'src/scss/main.scss', 'src/index.html'], function(){
	gulp.start('html');
    });
});
