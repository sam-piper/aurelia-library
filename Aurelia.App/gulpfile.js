/// <binding ProjectOpened='watch' />
var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('build-dev', shell.task(['au build --env dev']));
gulp.task('build-prod', shell.task(['au build --env prod']));
gulp.task('test', shell.task(['au test --watch']));
gulp.task('update', shell.task(['yarn']));
gulp.task('watch', shell.task(['au run --watch']));