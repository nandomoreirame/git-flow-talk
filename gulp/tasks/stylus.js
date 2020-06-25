const gulp = require('gulp')
const plumber = require('gulp-plumber')
const paths = require('../paths')
const stylus = require('gulp-stylus')
const cssnano = require('gulp-cssnano')

module.exports = gulp.task('stylus', () =>
  gulp
    .src(paths.source.styl)
    .pipe(plumber())
    .pipe(
      stylus({
        compress: true,
      }),
    )
    .pipe(cssnano())
    .pipe(gulp.dest(paths.build.css)),
)
