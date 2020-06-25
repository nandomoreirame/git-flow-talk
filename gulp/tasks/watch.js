const gulp = require('gulp')
const paths = require('../paths')

module.exports = gulp.task('watch', () => {
  gulp.watch([paths.source.slides, paths.source.templates], ['pug'])
  gulp.watch(paths.source.js, ['js'])
  gulp.watch(paths.source.styl, ['stylus'])
  gulp.watch(paths.source.img, ['imagemin'])
})
