const gulp = require('gulp')

module.exports = gulp.task('default', [
  'js',
  'pug',
  'notes',
  'stylus',
  'imagemin',
  'watch',
  'browser-sync',
  'js',
])
