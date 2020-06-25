const gulp = require('gulp')

module.exports = gulp.task('build', ['pug', 'notes', 'stylus', 'imagemin', 'js'])
