const gulp = require('gulp')
const plumber = require('gulp-plumber')
const paths = require('../paths')
const imagemin = require('gulp-imagemin')

module.exports = gulp.task('imagemin', () =>
  gulp
    .src(paths.source.img)
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(paths.build.img)),
)
