var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var autoprefixer = require('gulp-autoprefixer');
var wiredep = require('wiredep').stream;
var csso = require('gulp-csso');
var serve = require('gulp-serve');

var input = './scss/**/*.scss';

gulp.task('default', function(){
  var injectAppFiles = gulp.src('scss/styles/*.scss', {read: false});
  var injectGlobalFiles = gulp.src('scss/global/*.scss', {read: false});

  function transformFilepath(filepath) {
    return '@import "' + filepath + '";';
  }

  var injectAppOptions = {
    transform: transformFilepath,
    starttag: '// inject:app',
    endtag: '// endinject',
    addRootSlash: false
  };

  var injectGlobalOptions = {
    transform: transformFilepath,
    starttag: '// inject:global',
    endtag: '// endinject',
    addRootSlash: false
  };

  return gulp.src('scss/main.scss')
    .pipe(wiredep())
    .pipe(inject(injectGlobalFiles, injectGlobalOptions))
    .pipe(inject(injectAppFiles, injectAppOptions))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['default'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});


gulp.task('serve', serve('.'));
