const gulp = require('gulp')
const paths = require('../paths')
const deploy = require('gulp-gh-pages-will')

module.exports = gulp.task('deploy-pages', () => gulp.src(paths.deploy.pages).pipe(deploy()))
