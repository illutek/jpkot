
/**
 * Created by stefan on 13.04.17.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
//var browserSync = require('browser-sync').create();

// //////////////////////////////////////////////
// Sass to css
// /////////////////////////////////////////////
gulp.task('sass', function () {
    return gulp.src('sass/styles.sass')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('minifyCSS', function () {
    return gulp.src('css/styles.css')
        .pipe(minifyCSS({keepBreaks: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'))
});

// ///////////////////////////////////////////////////
// build folder
// //////////////////////////////////////////////////

var filesToMove = [
    './bower_components/**/*.*',
    './css/styles.min.css',
    './fonts/**/*.*',
    './images/**/*.*',
    './js/**/*.*',
    './templates/**/*.*',
    './jpkot.info.yml',
    './jpkot.libraries.yml',
    './jpkot.theme',
    './readme.md',
    './screenshot.png'
];

gulp.task('clean', function(){
    return gulp.src(['build/*'], {read:false})
        .pipe(clean());
});


gulp.task('move',['clean'], function(){
    // the base option sets the relative root for the set of files,
    // preserving the folder structure
    gulp.src(filesToMove, { base: './' })
        .pipe(gulp.dest('build'));
});

// ///////////////////////////////////////////////////
// Watch Task
// ///////////////////////////////////////////////////
gulp.task('watch', function(){
    gulp.watch('sass/**/*.{scss,sass}', ['sass']);
});

// ///////////////////////////////////////////////////
// Default Task
// ///////////////////////////////////////////////////
gulp.task('default' , ['sass', 'minifyCSS', 'watch']);
