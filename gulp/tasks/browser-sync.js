const gulp = require('gulp')
const paths = require('../paths')
const browserSync = require('browser-sync')

module.exports = gulp.task('browser-sync', () => {
  const files = [
    paths.browserSync.html,
    paths.browserSync.js,
    paths.browserSync.css,
    paths.browserSync.img,
  ]

  browserSync.init(files, {
    server: {
      baseDir: paths.build.html,
    },
  })
})
