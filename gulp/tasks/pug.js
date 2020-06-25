const gulp = require('gulp')
const plumber = require('gulp-plumber')
const paths = require('../paths')
const pug = require('gulp-pug')

module.exports = gulp.task('pug', () =>
  gulp.src(paths.source.files.pug).pipe(plumber()).pipe(pug()).pipe(gulp.dest(paths.build.html)),
)
