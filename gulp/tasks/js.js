// Necessary Plugins
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const paths = require('../paths')
const uglify = require('gulp-uglify')

// Call Uglify and Concat JS
module.exports = gulp.task('js', () =>
  gulp.src(paths.source.js).pipe(plumber()).pipe(uglify()).pipe(gulp.dest(paths.build.js)),
)
