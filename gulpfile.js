const gulp   = require('gulp');
const eslint = require('gulp-eslint');
const mocha  = require('gulp-mocha');

var appFiles = ['lib/**/*.js', 'gulpfile.js'];
var testFiles = ['test/**/*.js'];
gulp.task('lint:files', () => {
  gulp.src(appFiles)
    .pipe(eslint())
    .pipe(eslint.format());
  gulp.src(testFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('mocha:test', () => {
  gulp.src(testFiles)
    .pipe(mocha());
});

gulp.task('watch', () => {
  gulp.watch('**/**/*.js', ['lint:files', 'mocha:test']);
});

gulp.task('default', ['lint:files', 'mocha:test', 'watch']);
