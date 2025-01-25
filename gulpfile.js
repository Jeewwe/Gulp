const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps');
const uglify = required('gulp-uglify');

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log("Executando via Gulp");
        callback();
    }, 2000);
}

function falaOi(callback) {
    setTimeout(function(){
    console.log("Olá Gulp");
    sayByebye();
    callback();
    }, 1000);
}

function sayByebye() {
    console.log("Byebye Gulp");
} 

exports.default = gulp.parallel(funcaoPadrao, falaOi); 
exports.falaOi = falaOi
exports.sass = compilaSass;
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
}
exports.javascripts = comprimeJavaScript;