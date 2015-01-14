'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

global.dieOnError = true;

global.onError = function (err) {
  browserSync.notify(err.message, 3000);
  this.emit('end'); // jshint ignore: line
};

gulp.task('auto-reload', getTask('auto-reload'));
gulp.task('html', getTask('html'));
gulp.task('js', ['js-quality'], getTask('js'));
gulp.task('js-quality', getTask('js-quality'));
gulp.task('scss', getTask('scss'));

gulp.task('default', ['html', 'js', 'scss'], getTask('default'));

function getTask(name) {
  return require('gulp-tasks/' + name)(gulp, plugins);
}